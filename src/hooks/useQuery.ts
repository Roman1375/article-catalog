import {useCallback, useEffect, useState} from "react";

export function useQuery<T>(queryFn: () => Promise<T>) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchFn = useCallback(
        async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await queryFn();
                setData(response);
            } catch (err) {
                setError(err as Error);
            } finally {
                setIsLoading(false);
            }
        },
        [],
    );

    useEffect(() => {
        fetchFn().then();
    }, []);

    return {
        isLoading,
        error,
        data,
        refetch: fetchFn,
    };
}