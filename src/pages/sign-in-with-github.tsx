import logo from '../assets/logo-in-orbit.svg'
import { Button } from '../components/ui/button'

export function SignInWithGithub() {
  const githubUrl = new URL('https://github.com/login/oauth/authorize')
  githubUrl.searchParams.set('client_id', 'Ov23liILRt0pv9VKnQ05')

  return (
    <main className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Conclua suas metas semanais, ganhe experiência e suba de nivel!
      </p>

      <Button
        className="bg-white text-black hover:bg-white hover:opacity-60"
        asChild
      >
        <a href={githubUrl.toString()}>
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>github icon</title>
            <g clipPath="url(#clip0_420_349)">
              <path
                d="M11.0001 0C5.34537 0 0.76001 4.58456 0.76001 10.2401C0.76001 14.7644 3.69409 18.6029 7.76281 19.9569C8.27457 20.0517 8.46249 19.7347 8.46249 19.4642C8.46249 19.2201 8.45289 18.4134 8.44857 17.5578C5.59977 18.1772 4.99865 16.3496 4.99865 16.3496C4.53281 15.166 3.86161 14.8512 3.86161 14.8512C2.93257 14.2157 3.93169 14.2288 3.93169 14.2288C4.95993 14.301 5.50137 15.284 5.50137 15.284C6.41473 16.8494 7.89697 16.3969 8.48129 16.1352C8.57321 15.4734 8.83857 15.0216 9.13145 14.7659C6.85697 14.507 4.46601 13.629 4.46601 9.70528C4.46601 8.58728 4.86601 7.67376 5.52105 6.95664C5.41473 6.69872 5.06425 5.65728 5.62025 4.24672C5.62025 4.24672 6.48017 3.97152 8.43705 5.2964C9.25385 5.06952 10.1299 4.95576 11.0001 4.95184C11.8703 4.95576 12.747 5.06944 13.5654 5.2964C15.5198 3.9716 16.3786 4.2468 16.3786 4.2468C16.9359 5.6572 16.5853 6.6988 16.479 6.95664C17.1355 7.67376 17.5328 8.58728 17.5328 9.70528C17.5328 13.6383 15.1373 14.5043 12.857 14.7578C13.2243 15.0756 13.5516 15.6988 13.5516 16.6542C13.5516 18.0242 13.5398 19.127 13.5398 19.4642C13.5398 19.7368 13.7241 20.0561 14.2431 19.9554C18.3096 18.6 21.24 14.763 21.24 10.2402C21.24 4.58456 16.6553 0 11.0001 0Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_420_349">
                <rect
                  width="20.48"
                  height="20"
                  fill="white"
                  transform="translate(0.76001)"
                />
              </clipPath>
            </defs>
          </svg>
          Entrar com Github
        </a>
      </Button>
    </main>
  )
}
