//функции-селекторы (использоваться в нескольких местах приложения, нужны чтобы не было дублирования кода)
export const getTasks = state => state.tasks;
export const getStatusFilter = state => state.filters.status;