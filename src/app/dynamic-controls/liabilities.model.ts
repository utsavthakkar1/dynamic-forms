interface HlLiabilities {
    liabilityName: string,
    outstandingAmount: number,
    isManualLiability?: boolean,
    isUsedInRefi?: boolean,
    rb?:string,
    cb?: string
}