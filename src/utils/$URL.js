const $URL = (alias = '', currentLanguage = 'en', languages = ['en']) => {
  // const { languages } = store.state
  // const { currentLanguage } = store.getters

  let subfolder = !currentLanguage || currentLanguage === languages[0] ? '' : currentLanguage
  subfolder = subfolder.length > 0 ? `/${subfolder}/` : '/'

  return `${subfolder}${alias}`
}

export default $URL
