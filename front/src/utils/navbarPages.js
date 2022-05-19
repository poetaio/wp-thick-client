import { ALL_DOCTORS_ROUTE, ALL_EQUIPMENT_ROUTE, APPOINTMENTS_ROUTE, DEVICES_ROUTE, EQUIPMENT_REPORT_ROUTE, MY_APPOINTMENTS_ROUTE, MY_PATIENTS_ROUTE, MY_SCHEDULE_ROUTE, PROCEDURES_REPORT_ROUTE, REPORTS_ROUTE, STAFF_DOCTORS_ROUTE, STAFF_REGISTRANTS_ROUTE, STAFF_ROUTE, WORKAHOLICS_REPORT_ROUTE } from "./routesNames";
import { NavbarItemTypeEnum, UserRolesEnum } from './enums';
import appointmentsIcon from '../components/assets/img/navbar/appointment_32.png';
import scheduleIcon from '../components/assets/img/navbar/schedule_32.png';
import patientsIcon from '../components/assets/img/navbar/patient_32.png';
import doctorsIcon from '../components/assets/img/navbar/doctor_32.png';
import reportsIcon from '../components/assets/img/navbar/report_32.png';
import equipmentIcon from '../components/assets/img/navbar/equipment_filled_32.png';


const doctorNavbarComponents = [
  {
    path: ALL_DOCTORS_ROUTE,
    name: 'Doctors',
    type: NavbarItemTypeEnum.REGULAR,
    icon: doctorsIcon,
  },
  {
    path: MY_APPOINTMENTS_ROUTE,
    name: 'My appointments',
    type: NavbarItemTypeEnum.REGULAR,
    icon: appointmentsIcon,
  },
  {
    path: MY_SCHEDULE_ROUTE,
    name: 'My schedule',
    type: NavbarItemTypeEnum.REGULAR,
    icon: scheduleIcon,
  },
  {
    path: MY_PATIENTS_ROUTE,
    name: 'My patients',
    type: NavbarItemTypeEnum.REGULAR,
    icon: patientsIcon,
  }
];

const patientNavbarComponents = [
  {
    path: ALL_DOCTORS_ROUTE,
    name: 'Doctors',
    type: NavbarItemTypeEnum.REGULAR,
    icon: doctorsIcon,
  },
  {
    path: MY_APPOINTMENTS_ROUTE,
    name: 'My appointments',
    type: NavbarItemTypeEnum.REGULAR,
    icon: appointmentsIcon,
  },
];

const directorNavbarComponents = [
  {
    name: 'Staff',
    type: NavbarItemTypeEnum.DROPDOWN,
    icon: doctorsIcon,
    path: STAFF_ROUTE,
    items: [{
      path: STAFF_DOCTORS_ROUTE,
      name: 'Doctors',
      type: NavbarItemTypeEnum.REGULAR
    }, {
      path: STAFF_REGISTRANTS_ROUTE,
      name: 'Registrants',
      type: NavbarItemTypeEnum.REGULAR
    }],
  },
  {
    path: ALL_EQUIPMENT_ROUTE,
    name: 'Equipment',
    type: NavbarItemTypeEnum.REGULAR,
    icon: equipmentIcon,
  },
  {
    name: 'Reports',
    type: NavbarItemTypeEnum.DROPDOWN,
    icon: reportsIcon,
    path: REPORTS_ROUTE,
    items: [
      {
        path: WORKAHOLICS_REPORT_ROUTE,
        name: 'Workaholics',
        type: NavbarItemTypeEnum.REGULAR
      },
      {
        path: PROCEDURES_REPORT_ROUTE,
        name: 'Procedures',
        type: NavbarItemTypeEnum.REGULAR
      },
      {
        path: EQUIPMENT_REPORT_ROUTE,
        name: 'Equipment',
        type: NavbarItemTypeEnum.REGULAR
      },
    ]
  },
];

const registrantNavbarComponents = [
  {
    path: ALL_DOCTORS_ROUTE,
    name: 'Doctors',
    type: NavbarItemTypeEnum.REGULAR,
    icon: doctorsIcon,
  },
  {
    path: APPOINTMENTS_ROUTE,
    name: 'Appointments',
    type: NavbarItemTypeEnum.REGULAR,
    icon: appointmentsIcon,
  }
];

const navbarPagesMap = {
  [UserRolesEnum.DOCTOR]: doctorNavbarComponents,
  [UserRolesEnum.PATIENT]: patientNavbarComponents,
  [UserRolesEnum.DIRECTOR]: directorNavbarComponents,
  [UserRolesEnum.REGISTRANT]: registrantNavbarComponents
};


export const navbarPages = (userRole) => navbarPagesMap[userRole];
