export type PageParams<Paths extends string[] = []> = {
    params: Record<Paths[number], string>
}
