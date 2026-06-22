import React, { useState, useEffect, useRef } from 'react';

const languages = [
    { code: 'si', label: 'Sinhala', flag: '🇱🇰', googleCode: '/si/si' },
    { code: 'en', label: 'English', flag: '🇬🇧', googleCode: '/si/en' },
    { code: 'ta', label: 'Tamil', flag: '🇱🇰', googleCode: '/si/ta' },
    { code: 'ja', label: 'Japanese', flag: '🇯🇵', googleCode: '/si/ja' },
    { code: 'th', label: 'Thai', flag: '🇹🇭', googleCode: '/si/th' },
    { code: 'hi', label: 'Hindi', flag: '🇮🇳', googleCode: '/si/hi' },
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
        <div className="language-switcher" ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: 'var(--theme-color)',
                    color: '#fff',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '8px 12px',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    fontWeight: 500,
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    minWidth: '130px',
                    justifyContent: 'space-between'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '16px' }}>{currentLang.flag}</span>
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
                                    gap: '10px',
                                    width: '100%',
                                    padding: '8px 15px',
                                    border: 'none',
                                    background: 'transparent',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    color: '#333',
                                    fontFamily: 'Inter, sans-serif',
                                    fontSize: '14px',
                                    transition: 'background 0.3s'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = '#f5f5f5';
                                    e.currentTarget.style.color = 'var(--theme-color)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = '#333';
                                }}
                            >
                                <span style={{ fontSize: '16px' }}>{lang.flag}</span>
                                <span>{lang.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
