
export default function createMailLink(receiver_email: string, subject:  string, body: string='', emails_to_copy: string=''){
    return `mailto:${receiver_email}?subject=${subject}&body=${body}&cc=${emails_to_copy}`;
}
