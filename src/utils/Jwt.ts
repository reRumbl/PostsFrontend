interface JwtPayload {
    sub: string;
    jti: string;
    iat: number;
    exp: number;
}


const parseJwt = (token: string): JwtPayload => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');

    return JSON.parse(window.atob(base64));
}


const getCurrentUserId = (): string => {
    const token = localStorage.getItem('access_token');
    if (!token) {
        return ''
    }
    const payload = parseJwt(token);
    return payload.sub;
}


export default parseJwt;
export { getCurrentUserId };
