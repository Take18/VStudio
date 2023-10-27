export type VTuber = {
    id: string
    name: string
    iconPath: string
    subscribers: number
    channelUrl: string
    profile: string
    tags: string[]
    songs: { name: string; id: string }[]
}

export type Song = {
    id: string
    name: string
    videoId: string
    authorName: string
    tags: string[]
    vtubers: { name: string; id: string }[]
}

export type Movie = {
    id: string
    songName: string
    vtuberName: string
    plays: number
    goods: number
    videoId: string
    comments: {
        content: string
        goods: number
    }[]
    tags: string[]
}

export type All =
    | {
          type: 'vtuber'
          vtuber: VTuber
      }
    | {
          type: 'song'
          song: Song
      }
    | {
          type: 'movie'
          movie: Movie
      }

const vtuber: Omit<VTuber, 'id'> = {
    name: 'Takerin Ch - たけりん',
    iconPath:
        'https://yt3.ggpht.com/lbBxqAuOP0JRwjpS4FPY82PKtg80y6-VWhvpvHA_E5C8goldFpKzVupXM_MKLEmVO5Fnke2U-A=s88-c-k-c0x00ffffff-no-rj',
    subscribers: 1000000,
    channelUrl: 'https://www.youtube.com/channel/UC3IuTwvAYeYLzt5dHiuashA',
    profile: `【X(旧Twitter)アカウント】https://twitter.com/takerin_program
        【GitHubアカウント】https://github.com/Take18
        【VStudioリポジトリ】https://github.com/Take18/VStudio
        
        【プロフィール】
        24歳フリーランスエンジニアのたけりんです。主にWebフロントエンドエンジニアをしており、いくつかの現場で開発経験を積んできましたが、自分ひとりでプロダクトを作りたい！ついでに作っている過程を残したい！と思い立ってYouTubeを撮影してみた次第。エンジニアとしてやりたいことも色々あるけど、一番は技術者の枠を超えてクリエイターになりたい！そのために頑張ります。`,
    tags: [
        '個人開発',
        'プログラミング',
        'web開発',
        'javascript',
        'typescript',
        'nextjs',
        'nextjs13',
        'mongodb',
        'python',
    ],
    songs: [
        { name: 'デイバイデイズ', id: '1' },
        { name: '毒林檎', id: '2' },
        { name: 'パラライズ', id: '3' },
        { name: 'P.E.T.', id: '4' },
    ],
}

const song: Omit<Song, 'id'> = {
    name: 'デイバイデイズ',
    videoId: 'p00a6QGVjP0',
    authorName: 'syudou',
    tags: ['デイバイデイズ', '可不', '初音ミク'],
    vtubers: [
        { name: 'Takerin Ch - たけりん', id: '1' },
        { name: 'Takerin Ch - たけりん', id: '2' },
        { name: 'Takerin Ch - たけりん', id: '3' },
        { name: 'Takerin Ch - たけりん', id: '4' },
    ],
}

const movie: Omit<Movie, 'id'> = {
    songName: 'デイバイデイズ',
    vtuberName: 'Takerin Ch - たけりん',
    plays: 10000,
    goods: 1000,
    videoId: 'kfS_l1QgonA',
    comments: [
        { content: 'コメントだよ', goods: 1000 },
        { content: 'コメントだよ', goods: 1000 },
        { content: 'コメントだよ', goods: 1000 },
        { content: 'コメントだよ', goods: 1000 },
    ],
    tags: [
        'nextjs',
        'nextjs13',
        'プログラミング',
        'nextjs',
        'nextjs13',
        'プログラミング',
    ],
}

export const fetchVTubers = async (): Promise<VTuber[]> => {
    return [
        { ...vtuber, id: '1' },
        { ...vtuber, id: '2' },
        { ...vtuber, id: '3' },
        { ...vtuber, id: '4' },
    ]
}

export const fetchSongs = async (): Promise<Song[]> => {
    return [
        { ...song, id: '1' },
        { ...song, id: '2' },
        { ...song, id: '3' },
        { ...song, id: '4' },
    ]
}

export const fetchMovies = async (): Promise<Movie[]> => {
    return [
        { ...movie, id: '1' },
        { ...movie, id: '2' },
        { ...movie, id: '3' },
        { ...movie, id: '4' },
    ]
}

export const fetchAll = async (): Promise<All[]> => {
    return [
        { type: 'vtuber', vtuber: { ...vtuber, id: '1' } },
        { type: 'vtuber', vtuber: { ...vtuber, id: '2' } },
        { type: 'vtuber', vtuber: { ...vtuber, id: '3' } },
        { type: 'vtuber', vtuber: { ...vtuber, id: '4' } },
        { type: 'song', song: { ...song, id: '5' } },
        { type: 'song', song: { ...song, id: '6' } },
        { type: 'song', song: { ...song, id: '7' } },
        { type: 'song', song: { ...song, id: '8' } },
        { type: 'movie', movie: { ...movie, id: '9' } },
        { type: 'movie', movie: { ...movie, id: '10' } },
        { type: 'movie', movie: { ...movie, id: '11' } },
        { type: 'movie', movie: { ...movie, id: '12' } },
    ]
}
