import * as axios from "axios";


export const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'f50dd587-7159-4102-a0c5-fd99072a624b'
    }
});

export const loginRequest = (email, password, rememberMe, captcha) => {
    return axiosInstance.post('auth/login', {email, password, rememberMe, captcha})

};

export const logOutRequest = () => {
    return axiosInstance.post('auth/logout')
};
export const captchaRequest = () => {
    return axiosInstance.get('security/get-captcha-url')
};
export const authMeRequest = () => {
    return axiosInstance.get('auth/me')
};
export const getUsersByIdRequest = (id) => {
    return axiosInstance.get(`profile/ ${id}`)
};
export const UsersRequest = (count = 5, page = 1) => {
    return axiosInstance.get(`users?count=${count}&page=${page}`)
};

export const StatusRequest = (values) => {
    return axiosInstance.put('profile/status', {
        status: values.status
    });
};
export const StatusRequestGet = (id) => {
    return axiosInstance.get(`profile/status/${id}`)
};

export const FollowGet = (userId) => {
    return axiosInstance.get(`follow/${userId}`)
};

export const FollowRequestPost = (userId) => {
    return axiosInstance.post(`follow/${userId}`)
};

export const UnFollowRequest = (userId) => {
    return axiosInstance.delete(`follow/${userId}`)
};

// Запросить список собеседников, с кем я когда-либо вёл беседу
// return http://prntscr.com/n6nz6o
export const getDialogs = () => {
    return axiosInstance.get('dialogs')

};

// запросить список сообщений с конкретным собеседником (userId)
// return http://prntscr.com/n6nq5a
export const getMessages = (userId) => {
    return axiosInstance.get(`dialogs/${userId}/messages`)

};

// отправить сообщение (body: string) конкретному собеседнику (userId)
export const sendMessage = (userId, body) => {
    return axiosInstance.post(`dialogs/${userId}/messages`, {body})

};
// обновить\зарефрешить конкретного собеседника (userId), чтобы этот собеседник был вверху списка собеседников
export const updateDialog = (userId) => {
    return axiosInstance.put(`dialogs/${userId}`)

};
// просмотрено ли моё сообщение моим собеседником
export const isViewed = (messageId) => {
    return axiosInstance.get(`dialogs/messages/${messageId}/viewed`)

};
// пометить сообщение как СПАМ
export const setSpamStatus = (messageId) => {
    return axiosInstance.post(`dialogs/messages/${messageId}/spam`)

};
// удалить сообщение (удаляется только для удаляющей стороны, для собеседника сообщение не удаляется)
export const deleteMessage = (messageId) => {
    return axiosInstance.delete(`dialogs/messages/${messageId}`)

};

// восстановить удалённое сообщение (автоматически оно перестаёт ещё и быть спамом, если было отмечено как спам)
export const restoreMessage = (messageId) => {
    return axiosInstance.put(`dialogs/messages/${messageId}/restore`)

};
// получить сообщения из переписки с конкретным собеседником, сообщения, которые новее переданной даты
// return http://prntscr.com/n6nrug
export const checkNewMessages = (userId, date) => {
    return axiosInstance.get(`dialogs/${userId}/messages/new?newerThen=${date}`)

};

// получить число всех непрочитанных (новых) сообщений
export const newMessagesCount = () => {
    return axiosInstance.get(`dialogs/messages/new/count`)

};


