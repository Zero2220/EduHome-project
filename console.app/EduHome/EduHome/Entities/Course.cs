using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduHome.Entities
{
    internal class Course
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Starts { get; set; }

        public int Duration { get; set; }

        public int ClassDuration { get; set; }

        public string Language { get; set; }

        public int Students { get; set; }

        public int Price { get; set; }

        public string Image {  get; set; }

    }
}
