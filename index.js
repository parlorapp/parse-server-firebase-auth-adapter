function validateAuthData(authData, options)
{
    return options.admin.auth().verifyIdToken(authData.access_token).then(function (decodedToken)
    {
        if (decodedToken && decodedToken.uid == authData.id)
        {
            return;
        }
        throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, 'Firebase auth not found for this user.');

    }).catch(function (error) {
        throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, 'Firebase auth is invalid for this user.');
    });
}

function validateAppId(appIds, authData)) {
    return Promise.resolve();
}

module.exports = {
  validateAppId: validateAppId,
  validateAuthData: validateAuthData
};
