import { IsNotEmpty } from "class-validator"

export class CreateLectureDto {
    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    content: string
}
