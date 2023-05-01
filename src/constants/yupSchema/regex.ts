// regular expresion check for schema validation
export const urlRegex = /(http[s]*:\/\/)([a-z\-_0-9.]+)\.([a-z.]{2,3})\/([a-z0-9\-_/._~:?#[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i;
export const nameRegex = /^([a-z0-9]|[_](?![_])){3,14}$/;
// export const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9_.]+@+(\bnoroff|\bstud.noroff).+n+o$/
export const emailRegex =
	/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
