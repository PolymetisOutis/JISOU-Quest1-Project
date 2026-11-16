export const TestList = ({records}) => {
    return (
        records.map((record) => 
            <div key={record.title}>{record.title}-{record.time}時間</div>
    ))
}