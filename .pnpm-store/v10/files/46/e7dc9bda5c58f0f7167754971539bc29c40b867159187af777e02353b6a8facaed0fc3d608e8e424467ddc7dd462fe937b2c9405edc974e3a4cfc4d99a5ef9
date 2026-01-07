const regex = '@[a-z\\d][\\w-.]+/[a-z\\d][\\w-.]*';

export default function scopedRegex(options) {
	return options && options.exact ?
		new RegExp(`^${regex}$`, 'i') :
		new RegExp(regex, 'gi');
}
