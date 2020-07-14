import { API_URL } from './constants'

export const getRoutUrl = url => url.substring(API_URL.length - 1)