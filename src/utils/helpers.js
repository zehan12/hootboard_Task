export const delayForDisplay = async (promise) => {
    await new Promise(resolve => {
        setTimeout(resolve, 1000);
    });
    return promise;
}
