import logo from './images/logo.png';
import userIcon from './images/user-icon.png'
import passwordIcon from './images/password-icon.png'
import {Home, User, Upload, CalendarDays, Search, Filter, PlusCircle, Calendar, Eye, Folder} from 'lucide-react'


export const images = {
    logo,
    userIcon,
    passwordIcon
}

export const icons = {
    Home,
    User,
    Upload,
    CalendarDays,
    Search,
    Filter,
    PlusCircle,
    Calendar
}

export const menuItems = [
    {
        label: "Dashboard",
        path: "/",
        roles: ["staff","hr","department head","dean"],
        icon: Home
    },
    {
        label: "IPCR Submission",
        path: "/submission",
        roles: ["HR","PDO","staff","department head"],
        icon: Upload
    },
    {
        label: "Submission Management",
        path: "/submission-management",
        roles: ["HR","PDO","staff","department head"],
        icon: Folder
    },
    {
        label: "For Review",
        path: "/review",
        roles: ["HR","PDO","department head"],
        icon: Eye
    },
    {
        label: "Users",
        path: "/users",
        roles: ["hr","department head","dean"],
        icon: User
    },
    {
        label: "Submission Mangement",
        path: "/submission-management",
        roles: ["HR","PDO"],
        icon: CalendarDays
    },
]

export const ipcrSubmissionModule = [
    {
        ipcr_submission_id: 1,
        start_date: "June 1, 2026",
        end_date: "June 30, 2026",
        quarter: "Q1",
        year: "2026",
        status: "open",
        note: "upload your accomplished ipcr (Excel File Only)"
    }
]

export const ipcrModule = [
    {
        ipcr_id: 1,
        type: 'IPCR',
        ipcr_submission_id: 1,
        user_id: 7,
        file_name: 'IPCR_Angelo.xls',
        date_submitted: 'June 10, 2026',
        status: 'Pending',
        current_step: 1
    },
    {
        ipcr_id: 2,
        type: 'IPCR',
        ipcr_submission_id: 1,
        user_id: 8,
        file_name: 'IPCR_Angelo.xls',
        date_submitted: 'June 20, 2026',
        status: 'Pending',
        current_step: 1
    }
]

export const users = [
    {
        user_id: 1,
        name: "Roy Searca Jose Dela Cruz",
        department: "none",
        college: "CEn",
        VP: "VPAA",
        username: "roysearcajose",
        password: "12345678",
        role: ["dean","Chief"]
    },
    {
        user_id: 2,
        name: "John Paulo Sacdalan",
        department: "ABE",
        college: "CEn",
        VP: "VPAA",
        username: "johnpaulo",
        password: "12345678",
        role: "department head"
    },
    {
        user_id: 3,
        name: "Joseph Frank Nagal",
        department: "CE",
        college: "CEn",
        VP: "VPAA",
        username: "josephfrank",
        password: "12345678",
        role: "department head"
    },
    {
        user_id: 4,
        name: "Policarpio Bulanan",
        department: "ES",
        college: "CEn",
        VP: "VPAA",
        username: "policarpio",
        password: "12345678",
        role: "department head"
    },
    {
        user_id: 5,
        name: "Anjela Tolentino",
        department: "IT",
        college: "CEn",
        VP: "VPAA",
        username: "anjela",
        password: "12345678",
        role: "department head"
    },
    {
        user_id: 6,
        name: "Nemesio Macabale Jr.",
        department: "ISI",
        college: "CEn",
        VP: "VPAA",
        username: "anjela",
        password: "12345678",
        role: "department head"
    },
    {
        user_id: 7,
        name: "Angelo natividad",
        department: "IT",
        college: "CEn",
        VP: "VPAA",
        username: "angelo",
        password: "12345678",
        role: "staff"
    },
    {
        user_id: 8,
        name: "Angela natividad",
        department: "IT",
        college: "CEn",
        VP: "VPAA",
        username: "angela",
        password: "12345678",
        role: "staff"
    },
    {
        user_id: 9,
        name: "Rose Marsha Jimenez",
        department: "IT",
        college: "CEn",
        VP: "VPAA",
        username: "rosemarsha",
        password: "12345678",
        role: "staff"
    },
    {
        user_id: 10,
        name: "Daniel Legaspi",
        department: "IT",
        college: "CEn",
        VP: "VPAA",
        username: "daniel",
        password: "12345678",
        role: "staff"
    },
    {
        user_id: 11,
        name: "Genrev Salazar",
        department: "IT",
        college: "CEn",
        VP: "VPAA",
        username: "genrev",
        password: "12345678",
        role: "staff"
    },
    {
        user_id: 12,
        name: "Aldrin Badua",
        department: "none",
        college: "URPO",
        VP: "VPRE",
        username: "aldrin",
        password: "12345678",
        role: "Director"
    },
    {
        user_id: 13,
        name: "Queenie Peneyra",
        department: "ACD",
        college: "URPO",
        VP: "VPRE",
        username: "queenie",
        password: "12345678",
        role: "Head"
    },
    {
        user_id: 14,
        name: "Maria Loida Irabagon",
        department: "CED",
        college: "URPO",
        VP: "VPRE",
        username: "marialoida",
        password: "12345678",
        role: "Head"
    },
    {
        user_id: 15,
        name: "Eugenia Baltazar",
        department: "CDD",
        college: "URPO",
        VP: "VPRE",
        username: "eugenia",
        password: "12345678",
        role: "Head"
    },
    {
        user_id: 16,
        name: "Armando Lagasca",
        department: "TPD",
        college: "URPO",
        VP: "VPRE",
        username: "armando",
        password: "12345678",
        role: "Head"
    },
    {
        user_id: 17,
        name: "Carlos Mendoza",
        department: "TPD",
        college: "URPO",
        VP: "VPRE",
        username: "carlos",
        password: "12345678",
        role: "staff"
    },
    {
        user_id: 18,
        name: "Juan Reyes",
        department: "TPD",
        college: "URPO",
        VP: "VPRE",
        username: "juan",
        password: "12345678",
        role: "staff"
    },
    {
        user_id: 19,
        name: "Michael Santos",
        department: "TPD",
        college: "URPO",
        VP: "VPRE",
        username: "michael",
        password: "12345678",
        role: "staff"
    },
    {
        user_id: 20,
        name: "Joseph Cruz",
        department: "TPD",
        college: "URPO",
        VP: "VPRE",
        username: "joseph",
        password: "12345678",
        role: "staff"
    },
    {
        user_id: 21,
        name: "Daniel Garcia",
        department: "TPD",
        college: "URPO",
        VP: "VPRE",
        username: "daniel",
        password: "12345678",
        role: "staff"
    },
    {
        user_id: 22,
        name: "Joice San Andres",
        department: "none",
        college: "APD",
        VP: "VPBA",
        username: "joice",
        password: "12345678",
        role: "director"
    },
    {
        user_id: 23,
        name: "Jayson Juan",
        department: "Swine",
        college: "APD",
        VP: "VPBA",
        username: "jayson",
        password: "12345678",
        role: "project manager"
    },
    {
        user_id: 24,
        name: "Kier Santiago",
        department: "Poultry",
        college: "APD",
        VP: "VPBA",
        username: "kier",
        password: "12345678",
        role: "project manager"
    },
    {
        user_id: 25,
        name: "Joseph Mendoza",
        department: "Broiler",
        college: "APD",
        VP: "VPBA",
        username: "joseph",
        password: "12345678",
        role: "project manager"
    },
    {
        user_id: 26,
        name: "Eddie Boy Jimenez",
        department: "Fish",
        college: "APD",
        VP: "VPBA",
        username: "ediieboy",
        password: "12345678",
        role: "project manager"
    },
    {
        user_id: 27,
        name: "Mark Santos",
        department: "Fish",
        college: "APD",
        VP: "VPBA",
        username: "mark",
        password: "12345678",
        role: "staff"
    },
    {
        user_id: 28,
        name: "John Reyes",
        department: "Fish",
        college: "APD",
        VP: "VPBA",
        username: "john",
        password: "12345678",
        role: "staff"
    },
    {
        user_id: 29,
        name: "Paolo Cruz",
        department: "Fish",
        college: "APD",
        VP: "VPBA",
        username: "paolo",
        password: "12345678",
        role: "staff"
    },
    {
        user_id: 30,
        name: "Kevin Mendoza",
        department: "Fish",
        college: "APD",
        VP: "VPBA",
        username: "kevin",
        password: "12345678",
        role: "staff"
    },
    {
        user_id: 31,
        name: "Ryan Garcia",
        department: "Fish",
        college: "APD",
        VP: "VPBA",
        username: "ryan",
        password: "12345678",
        role: "staff"
    },
    {
        user_id: 32,
        name: "Cheryl Ramos",
        department: "none",
        college: "ADS",
        VP: "VPA",
        username: "cheryl",
        password: "12345678",
        role: "director"
    },
    {
        user_id: 33,
        name: "Jonathan Gurion",
        department: "HRMO",
        college: "ADS",
        VP: "VPA",
        username: "jonathan",
        password: "12345678",
        role: "chief"
    },
    {
        user_id: 34,
        name: "Loida Gurion",
        department: "RO",
        college: "ADS",
        VP: "VPA",
        username: "loida",
        password: "12345678",
        role: "chief"
    },
    {
        user_id: 35,
        name: "Ronnie Gutierrez",
        department: "PO",
        college: "ADS",
        VP: "VPA",
        username: "ronnie",
        password: "12345678",
        role: "chief"
    },
    {
        user_id: 36,
        name: "Jose Ariel Barza",
        department: "PSO",
        college: "ADS",
        VP: "VPA",
        username: "joseariel",
        password: "12345678",
        role: "chief"
    },
    {
        user_id: 37,
        name: "Christian Santos",
        department: "PSO",
        college: "ADS",
        VP: "VPA",
        username: "christian",
        password: "12345678",
        role: "staff"
    },
    {
        user_id: 38,
        name: "Michael Reyes",
        department: "PSO",
        college: "ADS",
        VP: "VPA",
        username: "michael",
        password: "12345678",
        role: "staff"
    },
    {
        user_id: 39,
        name: "Anthony Cruz",
        department: "PSO",
        college: "ADS",
        VP: "VPA",
        username: "anthony",
        password: "12345678",
        role: "staff"
    },
    {
        user_id: 40,
        name: "Joshua Garcia",
        department: "PSO",
        college: "ADS",
        VP: "VPA",
        username: "joshua",
        password: "12345678",
        role: "staff"
    },
    {
        user_id: 41,
        name: "Daniel Mendoza",
        department: "PSO",
        college: "ADS",
        VP: "VPA",
        username: "daniel",
        password: "12345678",
        role: "staff"
    },
]
