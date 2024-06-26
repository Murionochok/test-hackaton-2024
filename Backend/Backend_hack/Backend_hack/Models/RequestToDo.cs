﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend_hack.Models
{
    public enum RequestState
    {
        Sent,
        Approved,
        Rejected,
        Done
    }
    public class RequestToDo
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 3)]
        public string Title { get; set; }

        [Required]
        [StringLength(500, MinimumLength = 10)]
        public string Description { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 3)]
        public string Address { get; set; }

        [Required]
        public DateTime Date { get; set; }
 /*       [Required]
        public DateTime CreateDate { get; set; } = DateTime.Now;*/

        [Required]
        [Phone]
        public string Phone { get; set; } = string.Empty;

        [Required]
        [RegularExpression("^(Weapon|Grocery|Staff)$")]
        public string Type { get; set; }

        [Required]
        public string CreatedByUserId { get; set; }
        [ForeignKey("CreatedByUserId")]
        public ApplicationUser ApplicationUser { get; set; }

        public RequestState State { get; set; } = RequestState.Sent;
    }
}
