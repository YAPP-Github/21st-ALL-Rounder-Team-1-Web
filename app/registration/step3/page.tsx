'use client';

import { FormEvent } from 'react';

const Step3 = () => {
	const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return <form onSubmit={handleOnSubmit}></form>;
};

export default Step3;
