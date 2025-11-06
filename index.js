import emailRegex from 'email-regex';
import {isMatch} from 'super-regex';

export default function isEmailLike(string) {
	return isMatch(emailRegex({exact: true}), string, {timeout: 300});
}
