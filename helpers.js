export const getFont = (type) => {
    return 'Roboto-' + type
}

export const getFlag = (type) => {
    return type === 'India' ? require('./assets/images/indianflag.png') : type === 'America' ? require('./assets/images/americanflag.png') : type === 'Germany' ? require('./assets/images/germanflag.png') : null
}
export const getPersonImage = (type) => {
    return type === 'person1' ? require('./assets/images/person1.jpg') : type === 'person2' ? require('./assets/images/person2.jpeg') : type === 'person3' ? require('./assets/images/person3.jpeg') : type === 'person4' ? require('./assets/images/person4.jpeg') : type === 'person5' ? require('./assets/images/person5.jpeg') : type === 'person6' ? require('./assets/images/person6.jpeg') : type === 'person7' ? require('./assets/images/person7.jpeg') : type === 'person8' ? require('./assets/images/person8.jpeg') : type === 'person9' ? require('./assets/images/person9.jpeg') : type === 'person10' ? require('./assets/images/person10.jpeg' ) : type === 'person11' ? require('./assets/images/person11.jpeg' ): null;

}