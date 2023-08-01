export function getObjectMainValue(object: any) {
    const [mainProp] = Object.keys(object)

    return object[mainProp]
}

export function getObjectMainProp(object: any) {
    const [mainProp] = Object.keys(object)

    return mainProp
}