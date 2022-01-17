import ILicense from "./license.interface";

export default interface IRepository {
    name: string,
    url: string,
    description: string,
    html_url: string,
    updated_at: string,
    visibility: string,
    license: ILicense,
    language: string,
}