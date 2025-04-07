export type noticetype = singenoticetype[];

export type singenoticetype = {
    title: string;
    desc: string;
    date: Date;
};

export type noticeprop = {
    item: noticetype
}

export default function getNotices(): noticetype {
    const notice = [
        {
            title: 'Holiday of Eid-ul-Fitr',
            desc: `Works of NIDS College officially
             off for Eid-ul-Fitr from 24 March to 5 April. On 6 April,  everything will continue as usualWorks of NIDS College officially off 
             for Eid-ul-Fitr from 24 March to 5 April. On 6 April, everything will  continue as usualWorks of NIDS College officially off for Eid-ul-Fitr 
             
             
             from 24 March to 5 April. On 6 April, everything will continue as usualWorks of NIDS College officially off for Eid-ul-Fitr from 24 March to 5 April. On 6 April, everything will continue as usualWorks of NIDS College officially off for Eid-ul-Fitr from 24 March to 5 April. On 6 April, everything will continue as usualWorks of NIDS College officially off for Eid-ul-Fitr from 24 March to 5 April. On 6 April, everything will continue as usual`,
            date: new Date('2025-04-05')
        },
        {
            title: 'Admission to CSE 2025',
            desc: 'Admission is going on from 6 May 2025 to 12 Dec 2025',
            date: new Date('2025-03-02')
        }
    ];


    return notice.sort((a, b) => b.date.getTime() - a.date.getTime());
}
