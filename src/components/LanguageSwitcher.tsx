import { useTranslation } from 'react-i18next'

import classes from './LanguageSwitcher.module.css'

function LanguageSwitcher () {

    const { i18n } = useTranslation()

    //Define the language options
    const options = [
        { value: 'en', flag: '🇺🇸', text: 'English' },
        { value: 'pt_br', flag: '🇧🇷', text: 'Portuguese' },
        { value: 'ea', flag: '🇪🇸', text: 'Spanish' },
        { value: 'it', flag: '🇮🇹', text: 'Italian' }
    ]

    return(
        <select className={classes.select} value={i18n.language} onChange={ (e) => i18n.changeLanguage(e.target.value)}>
            { options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.flag + ' ' + option.text}
                </option>
            ))}
        </select>
    )
}

export default LanguageSwitcher