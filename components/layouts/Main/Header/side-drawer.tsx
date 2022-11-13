import { useTheme } from 'next-themes';
import React from 'react';
import { useState } from 'react';
import { SlNotebook } from 'react-icons/sl';

interface Props {
    children: React.ReactNode;
}

const SideBar: React.FC<Props> = ({ children }) => {
    const { resolvedTheme, theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);
    const handleThemeChange = (theme: string) => {
        setTheme(theme);
    };
    React.useEffect(() => {
        if (localStorage.getItem('theme') === resolvedTheme) {
            setTheme(localStorage.getItem('theme') as string);
        } else {
            localStorage.setItem('theme', resolvedTheme as string);
        }
    }, [resolvedTheme, setTheme]);

    React.useEffect(() => setIsMounted(true), []);
    if (!isMounted) return null;
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-6 h-6 stroke-current"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="md:container">
                        <div className="flex-1 px-2 mx-2 font-bold text-lg md:text-3xl md:mx-0 md:px-0 flex items-center gap-2">
                            <SlNotebook></SlNotebook>
                            Tipai
                        </div>
                        <div className="flex-none hidden lg:flex items-center gap-4">
                            <div className="form-control">
                                <div className="input-group">
                                    <input type="text" placeholder="Search…" className="input input-bordered input-sm" />
                                    <button className="btn btn-square btn-sm">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="dropdown dropdown-end py-2">
                                <label tabIndex={0} className="btn btn-ghost text-[16px]">
                                    Themes
                                </label>
                                <ul tabIndex={0} className="menu dropdown-content p-2 shadow-xl bg-base-100 w-52 mt-4">
                                    <li
                                        className={`${resolvedTheme === 'light' ? 'bordered' : null}`}
                                        onClick={() => handleThemeChange('light')}
                                    >
                                        <a>Light</a>
                                    </li>
                                    <li
                                        className={`${resolvedTheme === 'night' ? 'bordered' : null}`}
                                        onClick={() => handleThemeChange('night')}
                                    >
                                        <a>Night</a>
                                    </li>
                                    <li
                                        className={`${resolvedTheme === 'retro' ? 'bordered' : null}`}
                                        onClick={() => handleThemeChange('retro')}
                                    >
                                        <a>Retro</a>
                                    </li>
                                    <li
                                        className={`${resolvedTheme === 'luxury' ? 'bordered' : null}`}
                                        onClick={() => handleThemeChange('luxury')}
                                    >
                                        <a>Luxury</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <main className="container py-3">{children}</main>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <div className="menu w-2/3 h-full bg-base-100 flex flex-col justify-between">
                    <nav>Nav</nav>
                    <footer>
                        <h4 className="font-bold py-1 text-center text-lg text-primary">Themes</h4>
                        <hr />
                        <div className="the text-[12px]mes flex flex-col gap-2">
                            <button
                                className={`${resolvedTheme === 'light' ? 'font-bold' : null} py-3 btn-ghost `}
                                onClick={() => handleThemeChange('light')}
                            >
                                Light
                            </button>
                            <button
                                className={`${resolvedTheme === 'night' ? 'font-bold' : null} py-3 btn-ghost `}
                                onClick={() => handleThemeChange('night')}
                            >
                                Night
                            </button>
                            <button
                                className={`${resolvedTheme === 'retro' ? 'font-bold' : null} py-3 btn-ghost `}
                                onClick={() => handleThemeChange('retro')}
                            >
                                Retro
                            </button>
                            <button
                                className={`${resolvedTheme === 'luxury' ? 'font-bold' : null} py-3 btn-ghost`}
                                onClick={() => handleThemeChange('luxury')}
                            >
                                Luxury
                            </button>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
