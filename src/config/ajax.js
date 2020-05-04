import {ajax} from 'rxjs/ajax';

export const GET = (url) => ajax.get(url);

export const POST = (url, body) => ajax.post(url, body);

export const PUT = (url, body) => ajax.put(url, body);

export const PATCH = (url, body) => ajax.patch(url, body);

export const DELETE = (url) => ajax.delete(url);
