import { authRoles } from 'app/auth';
import i18next from 'i18next';
import DocumentationNavigation from '../main/documentation/DocumentationNavigation';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
 
	  
					{
						id: 'project-dashboard',
						title: 'Project',
						type: 'item',
						icon: 'receipt',
						url: '/apps/dashboards/project'
					},
					{
						id: 'contacts',
						title: 'Reco',
						translate: 'Reco 2',
						type: 'item',
						icon: 'receipt',
						url: '/apps/contacts/all'
					},
					{
						id: 'Reco',
						title: 'Reco',  
						translate: 'Reco',
						type: 'item',
						icon: 'today',
						url: '/apps/calendar'
					},
			 
			 
	 
];

export default navigationConfig;
