export function api_login() {
    return "/api/user/login";
}
export function api_getStudents() {
  return "/api/user/student";
}

export function api_getClassByTeacher(id) {
  return `/api/class/getClassByTeacher/${id}`;
}

export function api_getStudentByClass(id) {
  return `/api/student/getStudentByClass/${id}`;
}

export function api_getStudentByParent(id) {
  return `/api/student/getStudentByParent/${id}`
}

export function api_qrCodeCheckin() {
  return `/api/qrCodeCheckin`
}

export function api_getStudentBYQRCodeCheckin(date: Date) {
  return `/api/student/getStudentBYQRCodeCheckin/${date}`
}

export function api_getSchoolById (id: number) {
  return `/api/school/${id}`
}

export function api_getTeacherByID (id: number) {
  return `/api/teacher/${id}`
} 

export function api_getMoment() {
  return `/api/moment`;
}

