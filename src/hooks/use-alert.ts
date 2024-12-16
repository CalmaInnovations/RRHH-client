import { useCallback, useState } from 'react';

type AlertType = 'success' | 'error' | 'warning' | 'info';

type AlertStatus = {
	type: AlertType;
	message: string;
};

const initialAlert: AlertStatus = {
	type: 'success',
	message: '',
};

export const useAlert = () => {
	const [alert, setAlert] = useState<AlertStatus>(initialAlert);

	const showAlert = useCallback((type: AlertType, message: string, duration = 3000) => {
		setAlert({ type, message });

		if (duration > 0) {
			setTimeout(() => {
				setAlert(initialAlert);
			}, duration);
		}
	}, []);

	const clearAlert = useCallback(() => setAlert(initialAlert), []);

	return { alert, showAlert, clearAlert };
};
