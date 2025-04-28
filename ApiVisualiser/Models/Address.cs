using System;

namespace ApiVisualiser.Models
{
    public class Address
    {
        public string? UPRN { get; set; }
        public string? UDPRN { get; set; }
        public string? AddressLine { get; set; }
        public string? BuildingName { get; set; }
        public string? ThoroughfareName { get; set; }
        public string? PostTown { get; set; }
        public string? Postcode { get; set; }
        public string? RPC { get; set; }
        public double? XCoordinate { get; set; }
        public double? YCoordinate { get; set; }
        public string? Status { get; set; }
        public string? LogicalStatusCode { get; set; }
        public string? ClassificationCode { get; set; }
        public string? ClassificationCodeDescription { get; set; }
        public int? LocalCustodianCode { get; set; }
        public string? LocalCustodianCodeDescription { get; set; }
        public string? CountryCode { get; set; }
        public string? CountryCodeDescription { get; set; }
        public string? PostalAddressCode { get; set; }
        public string? PostalAddressCodeDescription { get; set; }
        public string? BLPUStateCode { get; set; }
        public string? BLPUStateCodeDescription { get; set; }
        public string? TopographyLayerToid { get; set; }
        public string? WardCode { get; set; }
        public string? ParentUPRN { get; set; }
        public string? LastUpdateDate { get; set; }
        public string? EntryDate { get; set; }
        public string? BLPUStateDate { get; set; }
        public string? Language { get; set; }
        public double? Match { get; set; }
        public string? MatchDescription { get; set; }
        public string? DeliveryPointSuffix { get; set; }
    }
}
