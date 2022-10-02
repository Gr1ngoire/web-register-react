import {FC} from "react";

import styles from './styles.module.css'
import {StudentItemDto} from "../../common/types/students/student-item-dto.type";

const Students: FC = () => {

    const students: StudentItemDto[] = [
        {id: 1, email: "neo@test.com", name: "Thomas", secondName: "A.", surname: "Anderson", group: "IA-11", birthDate: "13.09.1971"},
        {id: 2, email: "sherlock@test.com", name: "Sherlock", secondName: "", surname: "Holmes", group: "IA-11", birthDate: "06.01.1854"},
        {id: 3, email: "neo@test.com", name: "Thomas", secondName: "A.", surname: "Anderson", group: "IA-11", birthDate: "13.09.1971"},
        {id: 4, email: "sherlock@test.com", name: "Sherlock", secondName: "", surname: "Holmes", group: "IA-11", birthDate: "06.01.1854"},
        {id: 5, email: "neo@test.com", name: "Thomas", secondName: "A.", surname: "Anderson", group: "IA-11", birthDate: "13.09.1971"},
        {id: 6, email: "sherlock@test.com", name: "Sherlock", secondName: "", surname: "Holmes", group: "IA-11", birthDate: "06.01.1854"},
        {id: 7, email: "neo@test.com", name: "Thomas", secondName: "A.", surname: "Anderson", group: "IA-11", birthDate: "13.09.1971"},
        {id: 8, email: "sherlock@test.com", name: "Sherlock", secondName: "", surname: "Holmes", group: "IA-11", birthDate: "06.01.1854"},
        {id: 9, email: "neo@test.com", name: "Thomas", secondName: "A.", surname: "Anderson", group: "IA-11", birthDate: "13.09.1971"},
        {id: 10, email: "sherlock@test.com", name: "Sherlock", secondName: "", surname: "Holmes", group: "IA-11", birthDate: "06.01.1854"},
        {id: 11, email: "neo@test.com", name: "Thomas", secondName: "A.", surname: "Anderson", group: "IA-11", birthDate: "13.09.1971"},
        {id: 12, email: "sherlock@test.com", name: "Sherlock", secondName: "", surname: "Holmes", group: "IA-11", birthDate: "06.01.1854"},
        {id: 13, email: "neo@test.com", name: "Thomas", secondName: "A.", surname: "Anderson", group: "IA-11", birthDate: "13.09.1971"},
        {id: 14, email: "sherlock@test.com", name: "Sherlock", secondName: "", surname: "Holmes", group: "IA-11", birthDate: "06.01.1854"},
        {id: 15, email: "neo@test.com", name: "Thomas", secondName: "A.", surname: "Anderson", group: "IA-11", birthDate: "13.09.1971"},
        {id: 16, email: "sherlock@test.com", name: "Sherlock", secondName: "", surname: "Holmes", group: "IA-11", birthDate: "06.01.1854"},
        {id: 17, email: "neo@test.com", name: "Thomas", secondName: "A.", surname: "Anderson", group: "IA-11", birthDate: "13.09.1971"},
        {id: 18, email: "sherlock@test.com", name: "Sherlock", secondName: "", surname: "Holmes", group: "IA-11", birthDate: "06.01.1854"},
        {id: 19, email: "neo@test.com", name: "Thomas", secondName: "A.", surname: "Anderson", group: "IA-11", birthDate: "13.09.1971"},
        {id: 20, email: "sherlock@test.com", name: "Sherlock", secondName: "", surname: "Holmes", group: "IA-11", birthDate: "06.01.1854"},
        {id: 21, email: "neo@test.com", name: "Thomas", secondName: "A.", surname: "Anderson", group: "IA-11", birthDate: "13.09.1971"},
        {id: 22, email: "sherlock@test.com", name: "Sherlock", secondName: "", surname: "Holmes", group: "IA-11", birthDate: "06.01.1854"},
        {id: 23, email: "neo@test.com", name: "Thomas", secondName: "A.", surname: "Anderson", group: "IA-11", birthDate: "13.09.1971"},
        {id: 24, email: "sherlock@test.com", name: "Sherlock", secondName: "", surname: "Holmes", group: "IA-11", birthDate: "06.01.1854"},
        {id: 25, email: "sherlock@test.com", name: "Sherlock", secondName: "", surname: "Holmes", group: "IA-11", birthDate: "06.01.1854"},
        {id: 26, email: "neo@test.com", name: "Thomas", secondName: "A.", surname: "Anderson", group: "IA-11", birthDate: "13.09.1971"},
        {id: 27, email: "sherlock@test.com", name: "Sherlock", secondName: "", surname: "Holmes", group: "IA-11", birthDate: "06.01.1854"},
        {id: 28, email: "neo@test.com", name: "Thomas", secondName: "A.", surname: "Anderson", group: "IA-11", birthDate: "13.09.1971"},
        {id: 29, email: "sherlock@test.com", name: "Sherlock", secondName: "", surname: "Holmes", group: "IA-11", birthDate: "06.01.1854"},
        {id: 30, email: "neo@test.com", name: "Thomas", secondName: "A.", surname: "Anderson", group: "IA-11", birthDate: "13.09.1971"},
        {id: 31, email: "sherlock@test.com", name: "Sherlock", secondName: "", surname: "Holmes", group: "IA-11", birthDate: "06.01.1854"},
        {id: 32, email: "neo@test.com", name: "Thomas", secondName: "A.", surname: "Anderson", group: "IA-11", birthDate: "13.09.1971"},
        {id: 33, email: "sherlock@test.com", name: "Sherlock", secondName: "", surname: "Holmes", group: "IA-11", birthDate: "06.01.1854"},
        {id: 34, email: "neo@test.com", name: "Thomas", secondName: "A.", surname: "Anderson", group: "IA-11", birthDate: "13.09.1971"},
        {id: 35, email: "sherlock@test.com", name: "Sherlock", secondName: "", surname: "Holmes", group: "IA-11", birthDate: "06.01.1854"},
        {id: 36, email: "neo@test.com", name: "Thomas", secondName: "A.", surname: "Anderson", group: "IA-11", birthDate: "13.09.1971"},
        {id: 37, email: "sherlock@test.com", name: "Sherlock", secondName: "", surname: "Holmes", group: "IA-11", birthDate: "06.01.1854"},
    ]

    return <div className={styles.studentsWrapper}>
        <div className={styles.tableWrapper}>
            <table className={styles.studentsTable} border={1} frame rules={"rows"}>
                <thead>
                <tr>
                    <th>Email</th>
                    <th>Ім'я</th>
                    <th>Прізвище</th>
                    <th>По-батькові</th>
                    <th>Група</th>
                    <th>Дата народження</th>
                </tr>
                </thead>
                <tbody>
                {students.map(({id, email, name, surname, secondName, group, birthDate}) => <tr key={id}>
                    <td>{email}</td>
                    <td>{name}</td>
                    <td>{surname}</td>
                    <td>{secondName}</td>
                    <td>{group}</td>
                    <td>{birthDate}</td>
                </tr>)}
                </tbody>
            </table>
        </div>
    </div>
}

export {Students}