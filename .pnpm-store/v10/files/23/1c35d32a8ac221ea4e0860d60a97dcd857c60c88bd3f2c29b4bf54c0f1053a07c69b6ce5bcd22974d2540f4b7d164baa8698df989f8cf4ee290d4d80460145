export type Options = {
	/**
	A file extension to append to the path.

	@example
	```
	import tempfile from 'tempfile';

	tempfile();
	//=> '/var/folders/3x/jf5977fn79jbglr7rk0tq4d00000gn/T/6271e235-13b9-4138-8b9b-ee2f26c09ce3'

	tempfile({extension: 'png'});
	//=> '/var/folders/3x/jf5977fn79jbglr7rk0tq4d00000gn/T/4049f192-43e7-43b2-98d9-094e6760861b.png'
	```
	*/
	readonly extension?: string;
};

/**
Get a random temporary file path.

@example
```
import tempfile from 'tempfile';

tempfile();
//=> '/var/folders/3x/jf5977fn79jbglr7rk0tq4d00000gn/T/6271e235-13b9-4138-8b9b-ee2f26c09ce3'
```
*/
export default function tempfile(options?: Options): string;
