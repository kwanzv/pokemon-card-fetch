declare module "useFetch" {
  export function useFetch(url: string): {
    data: any;
    isLoading: boolean;
    error: string | null;
  };
}