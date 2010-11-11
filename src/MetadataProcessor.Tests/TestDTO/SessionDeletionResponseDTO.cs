﻿using System;
using System.Runtime.Serialization;

namespace RESTWebServicesDTO.Response
{
    ///<summary>
    ///</summary>
    /// <jschema
    /// 
    /// />
    [Serializable, DataContract]
    public class SessionDeletionResponseDTO
    {
        ///<summary>
        /// LogOut status
        ///</summary>
        /// <jschema
        /// demoValue="true"
        /// />
        [DataMember]
        public bool LoggedOut { get; set; }
    }
}