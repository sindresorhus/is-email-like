import emailRegex from 'email-regex';

export default function isEmailLike(string) {
	return emailRegex({exact: true}).test(string);
}
