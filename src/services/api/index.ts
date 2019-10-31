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