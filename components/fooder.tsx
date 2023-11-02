'use client';

import Image from "next/image";

export default () => {

    const footerNavs = [

        {
            label: "Software",
            items: [
                {
                    href: 'https://nextjs.org/',
                    name: 'Next.js',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                },
                {
                    href: 'https://railway.app/',
                    name: 'railway.app'
                },
            ],
        },
        {
            label: "About",
            items: [
                {
                    href: 'https://kuehhas.at/',
                    name: 'OK Projekt & Verwaltung GmbH',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                },
                {
                    href: 'https://kuehhas.info/',
                    name: 'Me',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                },
                {
                    href: '/Privacypolicy',
                    name: 'Privacy'
                },
                {
                    href: 'https://kuehhas.info/kontakt',
                    name: 'Message',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                },
            ]
        }
    ]

    return (
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <div className="max-w-xs">
                        <Image src="/logo_info_small_mobile.webp" alt="Kuehhas Logo" className="w-32"  width={128} height={84} priority />
                        <p className="leading-relaxed mt-2 text-[15px]">
                            This page is a subsidiary product of OK Projekt & Verwaltung GmbH and was developed by Alexander Kühhas. If you have any questions or ideas for further development, please do not hesitate to send a message.
                            <br/><br/>If you wish to support these projects further, a small donation would be greatly appreciated.
                        </p>
                    </div>
                </div>
                <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4"
                                key={idx}
                            >
                                <h4 className="text-gray-800 font-medium">
                                    { item.label }
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <a
                                                href={el.href}
                                                className="hover:underline hover:text-indigo-600"

                                            >
                                                { el.name }
                                            </a>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2023 OK Projekt & Verwaltung GmbH All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="https://www.linkedin.com/in/alexander-k%C3%BChhas-9a5246244/">
                                <svg className="svg-icon w-6 h-6 text-white" viewBox="0 0 50 50">
                                    <circle cx="24" cy="24" r="20" fill="#0077B5"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z" fill="white"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z" fill="white"/>
                                </svg>
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="https://github.com/Sufferas">
                                <svg className="svg-icon w-6 h-6 text-black" viewBox="0 0 20 20">
                                    <path xmlns="http://www.w3.org/2000/svg" fill="#000000" fillRule="evenodd" d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z" clipRule="evenodd"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
    )
}
