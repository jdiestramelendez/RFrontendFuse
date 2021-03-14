(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[121],{2488:function(e,a,t){"use strict";t.r(a),a.default="const locale = {\n\tAPP_TITLE: 'Mailbox',\n\tCOMPOSE: 'Compose',\n\tFOLDERS: 'Folders',\n\tFILTERS: 'Filters',\n\tLABELS: 'Labels',\n\tNO_MESSAGES: 'There are no messages!',\n\tSEARCH_PLACEHOLDER: 'Search for an e-mail or contact',\n\tINBOX: 'Inbox',\n\tSENT: 'Sent',\n\tDRAFTS: 'Drafts',\n\tSPAM: 'Spam',\n\tTRASH: 'Trash',\n\tSTARRED: 'Starred',\n\tIMPORTANT: 'Important'\n};\n\nexport default locale;\n"},2489:function(e,a,t){"use strict";t.r(a),a.default="import i18next from 'i18next';\nimport React from 'react';\nimport { Redirect } from 'react-router-dom';\nimport ar from './i18n/ar';\nimport en from './i18n/en';\nimport tr from './i18n/tr';\n\ni18next.addResourceBundle('en', 'mailApp', en);\ni18next.addResourceBundle('tr', 'mailApp', tr);\ni18next.addResourceBundle('ar', 'mailApp', ar);\n\nconst MailAppConfig = {\n\tsettings: {\n\t\tlayout: {}\n\t},\n\troutes: [\n\t\t{\n\t\t\tpath: [\n\t\t\t\t'/apps/mail/label/:labelHandle/:mailId?',\n\t\t\t\t'/apps/mail/filter/:filterHandle/:mailId?',\n\t\t\t\t'/apps/mail/:folderHandle/:mailId?'\n\t\t\t],\n\t\t\tcomponent: React.lazy(() => import('./MailApp'))\n\t\t},\n\t\t{\n\t\t\tpath: '/apps/mail',\n\t\t\tcomponent: () => <Redirect to=\"/apps/mail/inbox\" />\n\t\t}\n\t]\n};\n\nexport default MailAppConfig;\n"},2634:function(e,a,t){"use strict";t.r(a);var n=t(118),o=t(197),l=t(0),r=t.n(l);a.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{variant:"h4",className:"mb-24"},"Multi Language"),r.a.createElement(o.a,{className:"mb-16",component:"p"},"Fuse React uses"," ",r.a.createElement("a",{href:"https://react.i18next.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("code",null,"react-i18next"))," ","for to support multiple languages."),r.a.createElement(o.a,{className:"mb-16 p-16 border-1 bg-yellow-50 rounded-8 text-gray-800",component:"p"},"Since not everybody need multi-language setup for their apps, we decided NOT to put translations everywhere. If you want to see the translations in action, visit the Mail app, and then change the language from the Toolbar. Mail app is the only app that has translations for demonstration purposes. You can look at its source code to see the usage."),r.a.createElement(o.a,{className:"mb-8",variant:"h5"},"Usage"),r.a.createElement(o.a,{className:"mb-16",component:"p"},"In order to use the translations, create your translation file within the folder you want to use the translations. For example, for the Mail app, create ",r.a.createElement("code",null,"i18n/en.js")," file inside the",r.a.createElement("code",null,"apps/mail")," folder."),r.a.createElement(n.a,{component:"pre",className:"language-jsx mb-24"},t(2488)),r.a.createElement(o.a,{className:"mb-16",component:"p"},"And register the language file with ",r.a.createElement("code",null,"i18next.addResourceBundle()")," at",r.a.createElement("code",null,"src/app/main/apps/mail/MailAppConfig.js")),r.a.createElement(n.a,{component:"pre",className:"language-jsx mb-24"},t(2489)),r.a.createElement(o.a,{className:"mb-16",component:"p"},"And use in a component with ",r.a.createElement("code",null,"useTranslation")," hook as below:"),r.a.createElement(n.a,{component:"pre",className:"language-jsx mb-24"},'\n                        import {useTranslation} from \'react-i18next\';\n\n                        const {t} = useTranslation(\'mailApp\');\n                    \n                        return (\n                            <div className="p-24">\n                                <Button\n                                    variant="contained"\n                                    color="primary"\n                                    className="w-full"\n                                    onClick={handleOpenDialog}\n                                >\n                                    {t(\'COMPOSE\')}\n                                </Button>\n                        '),r.a.createElement(o.a,{className:"mb-8",variant:"h5"},"Changing Language"),r.a.createElement(o.a,{className:"mb-16",component:"p"},"You should use ",r.a.createElement("code",null,"changeLanguage")," redux action to change language:"),r.a.createElement(n.a,{component:"pre",className:"language-jsx mb-24"},"\n                           import { changeLanguage } from 'app/store/i18nSlice';\n\n                            .\n                            .\n\n                            dispatch(changeLanguage(lng.id));\n                        "),r.a.createElement(o.a,{className:"mb-16",component:"p"},"Checkout example usage at",r.a.createElement("code",null,"src/app/fuse-layouts/shared-components/LanguageSwitcher.js")))}}}]);