export type IGenericErrorMessages = {
  path: string | number
  message: string
}

export type IGenericErrorResponse = {
  message: string
  errorMessages: IGenericErrorMessages[]
  statusCode: number
}
