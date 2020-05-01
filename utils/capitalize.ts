export default function (value: any): any{
if (typeof value === 'string' ){
    const trimmedValue = value;
    return trimmedValue[0].toUpperCase() + trimmedValue.slice(1);
} 
return value;
}