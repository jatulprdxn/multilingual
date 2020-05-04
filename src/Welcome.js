import React from 'react'
import { withTranslation } from 'react-i18next'

const welcome = ({t}) => {
  return (
    <div>
      {t('welcome.label')}
    </div>
  )
}

export default withTranslation()(welcome)  // another way for translation is higher order function so withTranslation its predefind higher function that used to translate