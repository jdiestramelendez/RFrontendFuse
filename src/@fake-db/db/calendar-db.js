import FuseUtils from '@fuse/utils';
import moment from 'moment';
import mock from '../mock';

function setDate(year, month, date, hours, minutes, seconds) {
	return moment(new Date(year, month, date, hours, minutes, seconds)).format('YYYY-MM-DDTHH:mm:ss.sssZ');
}

const calendarDB = {
	events: [
	  
	]
};

mock.onGet('/api/calendar-app/events').reply(config => {
	return [200, calendarDB.events];
});

mock.onPost('/api/calendar-app/add-event').reply(request => {
	const data = JSON.parse(request.data);
	const newEvent = {
		...data.newEvent,
		id: FuseUtils.generateGUID()
	};
	calendarDB.events = [...calendarDB.events, newEvent];
	return [200, newEvent];
});

mock.onPost('/api/calendar-app/update-event').reply(request => {
	const data = JSON.parse(request.data);

	calendarDB.events = calendarDB.events.map(event => {
		if (data.event.id === event.id) {
			return data.event;
		}
		return event;
	});

	return [200, data.event];
});

mock.onPost('/api/calendar-app/remove-event').reply(request => {
	const data = JSON.parse(request.data);
	const event = calendarDB.events.find(_event => data.eventId === _event.id);
	calendarDB.events = calendarDB.events.filter(_event => _event.id !== event.id);

	return [200, event];
});
