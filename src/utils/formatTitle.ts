const formatTitle = (title: string) => {
    const wordArr = title.split('_')

    const capitalisedWords = wordArr.map(word => word[0].toUpperCase() + word.substring(1))

    return capitalisedWords.join(' ')
}

export default formatTitle;