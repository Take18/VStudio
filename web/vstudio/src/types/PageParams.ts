export type PageParams<Paths extends string[] = []> = {
    params: Record<Paths[number], string>
    searchParams: Record<string, string | string[]>
}
