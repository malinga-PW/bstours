import React, { useState, useEffect, useRef } from 'react';

const languages = [
    { code: 'si', label: 'සිංහල', flag: 'lk', googleCode: '/si/si' },
    { code: 'en', label: 'English', flag: 'gb', googleCode: '/si/en' },
    { code: 'ta', label: 'தமிழ்', flag: 'lk', googleCode: '/si/ta' },
    { code: 'ja', label: '日本語', flag: 'jp', googleCode: '/si/ja' },
    { code: 'th', label: 'ไทย', flag: 'th', googleCode: '/si/th' },
    { code: 'hi', label: 'हिन्दी', flag: 'in', googleCode: '/si/hi' },
];

export default function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(languages[0]);
    const dropdownRef = useRef(null);

    useEffect(() => {
        // Try to detect current language from cookie
        const match = document.cookie.match(/(^|;) ?googtrans=([^;]*)(;|$)/);
        if (match && match[2]) {
            const code = match[2].split('/').pop();
            const lang = languages.find(l => l.code === code);
            if (lang) setCurrentLang(lang);
        }

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const changeLanguage = (lang) => {
        setCurrentLang(lang);
        setIsOpen(false);
        // Set google translate cookie (translating from source 'si' to target)
        document.cookie = `googtrans=${lang.googleCode}; path=/`;
        document.cookie = `googtrans=${lang.googleCode}; path=/; domain=${window.location.hostname}`;
        window.location.reload();
    };

    return (
        <div className="language-switcher notranslate" ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: '#ffffff',
                    color: '#005274',
                    border: '1px solid #005274',
                    padding: '3px 12px',
                    borderRadius: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    fontWeight: 500,
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    minWidth: '110px',
                    justifyContent: 'space-between',
                    outline: 'none'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <i className="fa-solid fa-globe" style={{ fontSize: '14px', color: '#005274', marginRight: '2px' }} />
                    <img src={`https://flagcdn.com/w20/${currentLang.flag}.png`} alt="flag" style={{ width: '16px', height: 'auto', objectFit: 'contain', borderRadius: '2px' }} />
                    <span>{currentLang.label}</span>
                </div>
                <i className="fa-regular fa-angle-down" />
            </button>

            {isOpen && (
                <ul style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '5px',
                    background: '#fff',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    borderRadius: '5px',
                    padding: '10px 0',
                    margin: 0,
                    listStyle: 'none',
                    minWidth: '130px',
                    zIndex: 1000
                }}>
                    {languages.map(lang => (
                        <li key={lang.code}>
                            <button
                                onClick={() => changeLanguage(lang)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    width: '100%',
                                    padding: '6px 15px',
                                    border: 'none',
                                    background: 'transparent',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    fontSize: '13px',
                                    color: '#005274',
                                    outline: 'none'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = '#f5f5f5';
                                    e.currentTarget.style.color = 'var(--theme-color)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = '#005274';
                                }}
                            >
                                <img src={`https://flagcdn.com/w20/${lang.flag}.png`} alt="flag" style={{ width: '16px', height: 'auto', objectFit: 'contain', borderRadius: '2px' }} />
                                <span>{lang.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
