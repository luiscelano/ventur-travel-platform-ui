const getHttpError = (error) => {
  return {
    message:
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString(),
    status: (error.response && error.response.status) || 500
  }
}

export default getHttpError
