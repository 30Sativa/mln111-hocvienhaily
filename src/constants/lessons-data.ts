import type { Lesson } from "@/types/lesson";

export const lessons: Lesson[] = [
  {
    id: "1",
    title: "Khái Lược Về Triết Học",
    subtitle: "Nguồn gốc, khái niệm và đối tượng của triết học",
    content: {
      sections: [
        {
          title: "Nguồn gốc của triết học",
          paragraphs: [
            "Triết học ra đời khoảng thế kỷ VIII – VI trước Công nguyên tại các trung tâm văn minh lớn như Ấn Độ, Trung Quốc và Hy Lạp cổ đại. Triết học xuất hiện khi con người bắt đầu có nhu cầu dùng lý trí để giải thích thế giới thay vì chỉ dựa vào thần thoại hay tín ngưỡng.",
            "Về nguồn gốc nhận thức, con người luôn muốn tìm hiểu về tự nhiên, xã hội và chính bản thân mình. Từ đó hình thành tư duy trừu tượng, tư duy lý luận và khả năng khái quát hóa. Đây chính là cơ sở nhận thức dẫn đến sự ra đời của triết học.",
            "Về nguồn gốc xã hội, triết học xuất hiện khi xã hội có sự phân công lao động, phân chia giai cấp và hình thành chế độ tư hữu. Vì vậy, triết học thường mang \"tính đảng\", phục vụ lợi ích của các giai cấp khác nhau.",
          ],
        },
        {
          title: "Khái niệm triết học",
          paragraphs: [
            "Ở Trung Quốc, \"Triết\" có nghĩa là trí tuệ, thể hiện sự truy tìm bản chất của con người, xã hội và vũ trụ. Ở Ấn Độ, \"Darshana\" mang nghĩa là chiêm ngưỡng, là con đường suy ngẫm để đạt tới chân lý. Trong khi đó, phương Tây dùng từ \"Philosophia\", nghĩa là yêu thích sự thông thái, nhấn mạnh khát vọng tìm kiếm chân lý của con người.",
            "Theo quan điểm của chủ nghĩa Mác – Lênin, triết học là hệ thống quan điểm lý luận chung nhất về thế giới và vị trí của con người trong thế giới đó; đồng thời là khoa học nghiên cứu những quy luật vận động và phát triển chung nhất của tự nhiên, xã hội và tư duy.",
          ],
        },
        {
          title: "Vấn đề đối tượng của triết học trong lịch sử",
          paragraphs: [
            "Trong lịch sử, đối tượng nghiên cứu của triết học có sự thay đổi qua từng thời kỳ. Ở thời cổ đại, triết học được xem là \"khoa học của mọi khoa học\" và chủ yếu nghiên cứu tự nhiên. Sang thời trung đại, triết học phục vụ thần học và tôn giáo, mang tính kinh viện.",
            "Đến thời phục hưng và cận đại, triết học đề cao khoa học và lý trí, muốn trở thành nền tảng của mọi khoa học. Triết học cổ điển Đức phát triển mạnh tư duy biện chứng. Đến triết học Mác – Lênin, triết học tập trung nghiên cứu những quy luật vận động và phát triển chung nhất của tự nhiên, xã hội và tư duy.",
          ],
        },
        {
          title: "Triết học – hạt nhân lý luận của thế giới quan",
          paragraphs: [
            "Thế giới quan là hệ thống quan niệm của con người về thế giới xung quanh, vị trí của con người trong thế giới và về cuộc sống xã hội. Có nhiều loại thế giới quan như thế giới quan tôn giáo, thế giới quan khoa học và thế giới quan triết học.",
            "Triết học được xem là hạt nhân lý luận của thế giới quan vì triết học chính là thế giới quan ở trình độ lý luận cao. Triết học không chỉ ảnh hưởng và chi phối các loại thế giới quan khác mà còn định hướng nhận thức và hành động của con người. Trong đó, thế giới quan duy vật biện chứng được xem là đỉnh cao của thế giới quan khoa học.",
          ],
        },
      ],
    },
    summary: {
      sections: [
        {
          title: "Nguồn gốc của triết học",
          points: [
            { text: "Nhu cầu nhận thức của con người." },
            { text: "Điều kiện xã hội có giai cấp và phân công lao động." },
          ],
          memorize: "Có nhận thức + có xã hội phát triển → triết học ra đời",
        },
        {
          title: "Khái niệm triết học",
          points: [
            { text: "Trung Quốc: Triết = trí tuệ." },
            { text: "Ấn Độ: Darshana = chiêm ngưỡng." },
            { text: "Phương Tây: Philosophia = yêu thích sự thông thái." },
            { text: "Theo Mác – Lênin: Triết học là khoa học nghiên cứu quy luật vận động và phát triển chung nhất của tự nhiên, xã hội và tư duy." },
          ],
          memorize: "Triết học nghiên cứu cái chung nhất",
        },
        {
          title: "Đối tượng của triết học qua lịch sử",
          points: [
            { text: "Cổ đại: Khoa học của mọi khoa học." },
            { text: "Trung đại: Phục vụ thần học." },
            { text: "Phục hưng – cận đại: Đề cao khoa học." },
            { text: "Mác – Lênin: Nghiên cứu quy luật chung nhất." },
          ],
          memorize: "Triết học thay đổi theo lịch sử xã hội",
        },
        {
          title: "Triết học và thế giới quan",
          points: [
            { text: "Định hướng nhận thức." },
            { text: "Ảnh hưởng hành động con người." },
            { text: "Chi phối các loại thế giới quan khác." },
          ],
          memorize: "Triết học = nền tảng tư duy của con người",
        },
      ],
    },
    quiz: [
      { id: 1, question: "Triết học ra đời vào khoảng thời gian nào?", options: ["Thế kỷ I", "Thế kỷ VIII – VI TCN", "Thế kỷ XV", "Thế kỷ XIX"], correctAnswer: 1 },
      { id: 2, question: "Triết học xuất hiện đầu tiên ở đâu?", options: ["Mỹ", "Nhật Bản", "Ấn Độ, Trung Quốc, Hy Lạp cổ đại", "Việt Nam"], correctAnswer: 2 },
      { id: 3, question: "Nguồn gốc nhận thức của triết học xuất phát từ:", options: ["Chiến tranh", "Nhu cầu hiểu biết thế giới", "Tôn giáo", "Chính trị"], correctAnswer: 1 },
      { id: 4, question: "Nguồn gốc xã hội của triết học là:", options: ["Sự phát triển nghệ thuật", "Sự phân chia giai cấp và lao động", "Sự phát triển thể thao", "Sự phát triển du lịch"], correctAnswer: 1 },
      { id: 5, question: "\"Philosophia\" nghĩa là gì?", options: ["Chiêm ngưỡng", "Trí tuệ", "Yêu thích sự thông thái", "Tư duy"], correctAnswer: 2 },
      { id: 6, question: "\"Darshana\" thuộc nền văn hóa nào?", options: ["Trung Quốc", "Hy Lạp", "Ấn Độ", "La Mã"], correctAnswer: 2 },
      { id: 7, question: "Theo Trung Quốc cổ đại, \"Triết\" nghĩa là:", options: ["Tình yêu", "Trí tuệ", "Tôn giáo", "Tự nhiên"], correctAnswer: 1 },
      { id: 8, question: "Theo Mác – Lênin, triết học nghiên cứu:", options: ["Văn học", "Nghệ thuật", "Quy luật chung nhất của tự nhiên, xã hội và tư duy", "Chính trị"], correctAnswer: 2 },
      { id: 9, question: "Triết học cổ đại được xem là:", options: ["Khoa học xã hội", "Khoa học tự nhiên", "Khoa học của mọi khoa học", "Khoa học kỹ thuật"], correctAnswer: 2 },
      { id: 10, question: "Triết học trung đại phục vụ cho:", options: ["Kinh tế", "Thần học", "Quân sự", "Khoa học kỹ thuật"], correctAnswer: 1 },
      { id: 11, question: "Triết học phục hưng đề cao:", options: ["Tôn giáo", "Khoa học và lý trí", "Chiến tranh", "Nghệ thuật"], correctAnswer: 1 },
      { id: 12, question: "Triết học Mác – Lênin nghiên cứu:", options: ["Một ngành khoa học riêng", "Quy luật chung nhất", "Tôn giáo", "Nghệ thuật"], correctAnswer: 1 },
      { id: 13, question: "Thế giới quan là:", options: ["Hệ thống quan niệm của con người về thế giới", "Hệ thống pháp luật", "Hệ thống giáo dục", "Hệ thống kinh tế"], correctAnswer: 0 },
      { id: 14, question: "Triết học là hạt nhân lý luận của:", options: ["Chính trị", "Khoa học", "Thế giới quan", "Tôn giáo"], correctAnswer: 2 },
      { id: 15, question: "Đỉnh cao của thế giới quan khoa học là:", options: ["Thế giới quan tôn giáo", "Thế giới quan kinh nghiệm", "Thế giới quan duy vật biện chứng", "Thế giới quan thần thoại"], correctAnswer: 2 },
    ],
    flashcards: [
      { id: 1, question: "Triết học ra đời vào khoảng thời gian nào?", answer: "Thế kỷ VIII – VI TCN" },
      { id: 2, question: "Triết học xuất hiện ở đâu?", answer: "Ấn Độ, Trung Quốc, Hy Lạp cổ đại" },
      { id: 3, question: "Hai nguồn gốc của triết học?", answer: "Nguồn gốc nhận thức và nguồn gốc xã hội" },
      { id: 4, question: "Nguồn gốc nhận thức là gì?", answer: "Nhu cầu hiểu biết thế giới của con người" },
      { id: 5, question: "Nguồn gốc xã hội là gì?", answer: "Phân công lao động và phân chia giai cấp" },
      { id: 6, question: "\"Philosophia\" nghĩa là gì?", answer: "Yêu thích sự thông thái" },
      { id: 7, question: "\"Darshana\" nghĩa là gì?", answer: "Chiêm ngưỡng" },
      { id: 8, question: "\"Triết\" theo Trung Quốc nghĩa là gì?", answer: "Trí tuệ" },
      { id: 9, question: "Theo Mác – Lênin, triết học là gì?", answer: "Khoa học nghiên cứu quy luật chung nhất" },
      { id: 10, question: "Triết học cổ đại được xem là gì?", answer: "Khoa học của mọi khoa học" },
      { id: 11, question: "Triết học trung đại phục vụ cho gì?", answer: "Thần học" },
      { id: 12, question: "Triết học phục hưng đề cao điều gì?", answer: "Khoa học và lý trí" },
      { id: 13, question: "Triết học Mác – Lênin nghiên cứu gì?", answer: "Quy luật vận động chung nhất" },
      { id: 14, question: "Thế giới quan là gì?", answer: "Hệ thống quan niệm về thế giới" },
      { id: 15, question: "Triết học là hạt nhân lý luận của gì?", answer: "Thế giới quan" },
    ],
  },
  {
    id: "2",
    title: "Vấn Đề Cơ Bản Của Triết Học",
    subtitle: "Chủ nghĩa duy vật, duy tâm và nhận thức luận",
    content: {
      sections: [
        {
          title: "Nội dung vấn đề cơ bản của triết học",
          paragraphs: [
            "Theo Ph.Ăng-ghen: \"Vấn đề cơ bản lớn của mọi triết học, đặc biệt là của triết học hiện đại, là vấn đề quan hệ giữa tư duy với tồn tại\" (hay giữa ý thức với vật chất).",
            "Đây là vấn đề xuất phát điểm, quyết định toàn bộ thế giới quan của một nhà triết học. Vấn đề này gồm hai mặt:",
            "Mặt thứ nhất (Bản thể luận): Trả lời câu hỏi: Giữa vật chất và ý thức, cái nào có trước, cái nào có sau? Cái nào quyết định cái nào?",
            "Mặt thứ hai (Nhận thức luận): Trả lời câu hỏi: Con người có khả năng nhận thức được thế giới hay không?",
          ],
        },
        {
          title: "Chủ nghĩa duy vật và chủ nghĩa duy tâm",
          paragraphs: [
            "Dựa vào cách giải quyết mặt thứ nhất của vấn đề cơ bản, triết học chia thành hai trào lưu đối lập:",
            "Chủ nghĩa duy vật (Materialism): Khẳng định vật chất có trước, ý thức có sau; vật chất tồn tại khách quan và quyết định ý thức. Trong lịch sử, chủ nghĩa duy vật trải qua ba hình thức: Chủ nghĩa duy vật chất phác (Cổ đại) – đồng nhất vật chất với các vật thể cụ thể; Chủ nghĩa duy vật siêu hình (Thế kỷ XVII-XVIII) – nhìn thế giới như cỗ máy khổng lồ; Chủ nghĩa duy vật biện chứng (Mác-Lênin) – vật chất quyết định ý thức nhưng ý thức tác động ngược lại qua thực tiễn.",
            "Chủ nghĩa duy tâm (Idealism): Khẳng định ý thức, tinh thần có trước và quyết định vật chất. Chia làm hai phái: Chủ nghĩa duy tâm chủ quan (Berkeley, Hume) – thế giới là \"phức hợp của những cảm giác\" cá nhân; Chủ nghĩa duy tâm khách quan (Plato, Hegel) – tinh thần tuyệt đối tồn tại độc lập bên ngoài con người.",
          ],
        },
        {
          title: "Thuyết có thể biết và thuyết không thể biết",
          paragraphs: [
            "Khả tri luận: Khẳng định con người hoàn toàn có khả năng nhận thức được bản chất thế giới. Những tri thức khoa học là sự phản ánh chân thực hiện thực khách quan. Đại diện: chiếm đại đa số các nhà triết học.",
            "Bất khả tri luận: Khẳng định con người không thể hiểu được bản chất chân thực của thế giới, nhận thức chỉ dừng lại ở các hiện tượng bề ngoài. Đại biểu tiêu biểu: Immanuel Kant với thuyết \"Vật tự nó\" – con người chỉ nhận thức được các \"hiện tượng\", còn bản thân \"vật tự nó\" thì nhận thức vĩnh viễn không thể vươn tới được.",
          ],
        },
      ],
    },
    summary: {
      sections: [
        {
          title: "Vấn đề cơ bản của Triết học",
          points: [
            { text: "Là mối quan hệ giữa Ý thức (tư duy) và Vật chất (tồn tại), gồm 2 mặt." },
            { text: "Mặt 1: Vật chất và ý thức, cái nào có trước và quyết định cái nào?" },
            { text: "Mặt 2: Con người có thể nhận thức được thế giới hay không?" },
          ],
          memorize: "Cái gì sinh ra cái gì?",
        },
        {
          title: "Chủ nghĩa Duy vật & Chủ nghĩa Duy tâm",
          points: [
            { text: "Duy vật: Vật chất quyết định ý thức (3 hình thức: Chất phác, Siêu hình, Biện chứng)." },
            { text: "Duy tâm: Ý thức quyết định vật chất (2 phái: Chủ quan, Khách quan)." },
          ],
          memorize: "Vật trước – Tâm sau (DV), Tâm trước – Vật sau (DT)",
        },
        {
          title: "Khả tri luận & Bất khả tri luận",
          points: [
            { text: "Khả tri luận: Con người có thể nhận thức thế giới." },
            { text: "Bất khả tri luận: Con người không thể biết bản chất thế giới (Kant)." },
          ],
          memorize: "Khả tri = Biết được, Bất khả tri = Không chạm được bản chất",
        },
      ],
    },
    quiz: [
      { id: 1, question: "Vấn đề cơ bản của triết học là gì?", options: ["Quan hệ giữa xã hội và tự nhiên", "Quan hệ giữa tư duy và tồn tại", "Quan hệ giữa con người và xã hội", "Quan hệ giữa kinh tế và chính trị"], correctAnswer: 1 },
      { id: 2, question: "Vấn đề cơ bản của triết học gồm mấy mặt?", options: ["1", "2", "3", "4"], correctAnswer: 1 },
      { id: 3, question: "Mặt thứ nhất của vấn đề cơ bản trả lời câu hỏi nào?", options: ["Con người có thể biết thế giới không", "Vật chất có trước hay ý thức có trước", "Xã hội phát triển như thế nào", "Ý nghĩa cuộc sống là gì"], correctAnswer: 1 },
      { id: 4, question: "Mặt thứ hai của vấn đề cơ bản là gì?", options: ["Bản thể luận", "Nhận thức luận", "Kinh tế học", "Chính trị học"], correctAnswer: 1 },
      { id: 5, question: "Chủ nghĩa duy vật khẳng định:", options: ["Ý thức có trước", "Vật chất có trước", "Cả hai như nhau", "Không xác định được"], correctAnswer: 1 },
      { id: 6, question: "Chủ nghĩa duy tâm khẳng định:", options: ["Vật chất quyết định ý thức", "Ý thức quyết định vật chất", "Vật chất và ý thức độc lập", "Không có vật chất"], correctAnswer: 1 },
      { id: 7, question: "Duy vật chất phác đặc điểm là:", options: ["Hiện đại, khoa học", "Đồng nhất vật chất với các yếu tố tự nhiên", "Phủ nhận vật chất", "Chỉ nghiên cứu xã hội"], correctAnswer: 1 },
      { id: 8, question: "Duy vật siêu hình chịu ảnh hưởng mạnh từ:", options: ["Sinh học", "Cơ học cổ điển", "Toán học", "Tâm lý học"], correctAnswer: 1 },
      { id: 9, question: "Chủ nghĩa duy vật biện chứng do ai phát triển?", options: ["Kant", "Hegel", "Mác – Lênin", "Plato"], correctAnswer: 2 },
      { id: 10, question: "Duy tâm chủ quan cho rằng:", options: ["Thế giới tồn tại khách quan", "Thế giới là cảm giác cá nhân", "Thế giới là vật chất", "Không có ý thức"], correctAnswer: 1 },
      { id: 11, question: "George Berkeley nổi tiếng với quan điểm:", options: ["Vật chất quyết định ý thức", "Tồn tại tức là được tri giác", "Con người không biết gì", "Thế giới là vật chất"], correctAnswer: 1 },
      { id: 12, question: "Duy tâm khách quan thừa nhận:", options: ["Ý thức cá nhân", "Tinh thần tuyệt đối tồn tại độc lập", "Không có tinh thần", "Vật chất tự sinh"], correctAnswer: 1 },
      { id: 13, question: "Khả tri luận khẳng định:", options: ["Không thể nhận thức thế giới", "Có thể nhận thức thế giới", "Chỉ cảm giác là thật", "Không có tri thức"], correctAnswer: 1 },
      { id: 14, question: "Bất khả tri luận cho rằng:", options: ["Con người hiểu toàn bộ thế giới", "Không thể nhận thức bản chất thế giới", "Khoa học là tuyệt đối đúng", "Thế giới không tồn tại"], correctAnswer: 1 },
      { id: 15, question: "Đại diện bất khả tri luận tiêu biểu là:", options: ["Marx", "Hegel", "Kant", "Engels"], correctAnswer: 2 },
    ],
    flashcards: [
      { id: 1, question: "Vấn đề cơ bản của triết học là gì?", answer: "Quan hệ giữa tư duy (ý thức) và tồn tại (vật chất)" },
      { id: 2, question: "Vấn đề cơ bản gồm mấy mặt?", answer: "2 mặt (bản thể luận & nhận thức luận)" },
      { id: 3, question: "Mặt 1 hỏi gì?", answer: "Cái nào có trước và quyết định cái nào" },
      { id: 4, question: "Mặt 2 hỏi gì?", answer: "Con người có nhận thức được thế giới không" },
      { id: 5, question: "Duy vật là gì?", answer: "Vật chất có trước, quyết định ý thức" },
      { id: 6, question: "Duy tâm là gì?", answer: "Ý thức có trước, quyết định vật chất" },
      { id: 7, question: "3 hình thức duy vật?", answer: "Chất phác – Siêu hình – Biện chứng" },
      { id: 8, question: "Duy vật chất phác là gì?", answer: "Đồng nhất vật chất với tự nhiên (nước, lửa…)" },
      { id: 9, question: "Duy vật siêu hình đặc điểm?", answer: "Thế giới như cỗ máy tĩnh tại" },
      { id: 10, question: "Duy vật biện chứng là gì?", answer: "Vật chất quyết định ý thức + ý thức tác động lại qua thực tiễn" },
      { id: 11, question: "2 loại duy tâm?", answer: "Chủ quan & khách quan" },
      { id: 12, question: "Duy tâm chủ quan?", answer: "Thế giới là cảm giác cá nhân" },
      { id: 13, question: "Duy tâm khách quan?", answer: "Tinh thần tuyệt đối tồn tại bên ngoài con người" },
      { id: 14, question: "Khả tri luận là gì?", answer: "Con người có thể nhận thức thế giới" },
      { id: 15, question: "Bất khả tri luận là gì?", answer: "Con người không thể biết bản chất thế giới" },
    ],
  },
  {
    id: "3",
    title: "Sự Ra Đời & Phát Triển Triết Học Mác – Lênin",
    subtitle: "Điều kiện lịch sử, giai đoạn phát triển và vai trò của Lênin",
    content: {
      sections: [
        {
          title: "Những điều kiện lịch sử của sự ra đời triết học Mác",
          paragraphs: [
            "Triết học Mác ra đời dựa trên sự thống nhất giữa điều kiện khách quan và nhân tố chủ quan.",
            "Về điều kiện kinh tế – xã hội, chủ nghĩa tư bản phát triển mạnh làm xuất hiện giai cấp công nhân và tình trạng bóc lột giá trị thặng dư. Điều này đòi hỏi phải có một học thuyết khoa học để bảo vệ quyền lợi của giai cấp công nhân.",
            "Về tiền đề lý luận, triết học Mác kế thừa tinh hoa của triết học cổ điển Đức, kinh tế chính trị học cổ điển Anh và chủ nghĩa xã hội không tưởng Pháp. Đồng thời, những thành tựu khoa học tự nhiên cũng tạo cơ sở cho sự hình thành triết học Mác.",
            "Ngoài ra, C. Mác và Ph. Ăngghen còn tích cực tham gia hoạt động thực tiễn, hiểu rõ đời sống của giai cấp công nhân nên đã xây dựng nên học thuyết cách mạng mới.",
          ],
        },
        {
          title: "Những thời kỳ chủ yếu trong sự hình thành và phát triển",
          paragraphs: [
            "Giai đoạn 1841 – 1844 là thời kỳ C. Mác và Ph. Ăngghen chuyển từ lập trường duy tâm sang duy vật và từ dân chủ cách mạng sang chủ nghĩa cộng sản.",
            "Từ 1845 – 1848, hai ông xây dựng những nguyên lý cơ bản của chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử qua các tác phẩm như Luận cương về Feuerbach, Hệ tư tưởng Đức và Tuyên ngôn của Đảng cộng sản.",
            "Từ 1848 – 1895, triết học Mác tiếp tục được bổ sung và phát triển toàn diện qua các tác phẩm lớn như Tư bản và Chống Đuyrinh.",
          ],
        },
        {
          title: "Thực chất và ý nghĩa cuộc cách mạng trong triết học",
          paragraphs: [
            "C. Mác và Ph. Ăngghen đã khắc phục hạn chế của chủ nghĩa duy vật cũ và phép biện chứng duy tâm để xây dựng chủ nghĩa duy vật biện chứng. Đồng thời, hai ông vận dụng quan điểm duy vật vào nghiên cứu xã hội, từ đó sáng tạo ra chủ nghĩa duy vật lịch sử.",
            "Triết học Mác vừa mang tính khoa học vừa mang tính cách mạng, thống nhất giữa lý luận và thực tiễn, đồng thời khẳng định vai trò của thực tiễn trong nhận thức và cải tạo thế giới.",
          ],
        },
        {
          title: "Giai đoạn Lênin trong sự phát triển triết học Mác",
          paragraphs: [
            "Cuối thế kỷ XIX – đầu thế kỷ XX, chủ nghĩa tư bản chuyển sang giai đoạn đế quốc chủ nghĩa và xuất hiện nhiều mâu thuẫn xã hội mới. Trong bối cảnh đó, V.I. Lênin đã bảo vệ và phát triển triết học Mác.",
            "Lênin đấu tranh chống các quan điểm duy tâm, phát triển chủ nghĩa duy vật biện chứng và duy vật lịch sử, đồng thời bổ sung lý luận thông qua thực tiễn cách mạng xã hội chủ nghĩa. Một số tác phẩm tiêu biểu: Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán, Bút ký triết học và Nhà nước và cách mạng.",
          ],
        },
      ],
    },
    summary: {
      sections: [
        {
          title: "Điều kiện ra đời của triết học Mác",
          points: [
            { text: "Điều kiện kinh tế – xã hội của chủ nghĩa tư bản." },
            { text: "Tiền đề lý luận từ triết học Đức, KTCT Anh, CNXH không tưởng Pháp." },
            { text: "Thành tựu khoa học tự nhiên." },
            { text: "Hoạt động thực tiễn của C. Mác và Ph. Ăngghen." },
          ],
          memorize: "Triết học Mác ra đời từ thực tiễn xã hội và kế thừa tinh hoa nhân loại.",
        },
        {
          title: "Các giai đoạn phát triển",
          points: [
            { text: "1841 – 1844: Chuyển từ duy tâm sang duy vật." },
            { text: "1845 – 1848: Hình thành nguyên lý cơ bản." },
            { text: "1848 – 1895: Phát triển hoàn thiện." },
          ],
          memorize: "Từ chuyển biến tư tưởng → hình thành → phát triển hoàn chỉnh.",
        },
        {
          title: "Ý nghĩa cuộc cách mạng",
          points: [
            { text: "Xây dựng chủ nghĩa duy vật biện chứng." },
            { text: "Sáng tạo chủ nghĩa duy vật lịch sử." },
            { text: "Thống nhất lý luận với thực tiễn." },
          ],
          memorize: "Triết học Mác = duy vật + biện chứng + thực tiễn.",
        },
        {
          title: "Vai trò của Lênin",
          points: [
            { text: "Bảo vệ và phát triển triết học Mác." },
            { text: "Đấu tranh chống các quan điểm duy tâm." },
            { text: "Bổ sung lý luận qua thực tiễn cách mạng." },
          ],
          memorize: "Lênin là người phát triển triết học Mác trong thời đại đế quốc chủ nghĩa.",
        },
      ],
    },
    quiz: [
      { id: 1, question: "Triết học Mác ra đời dựa trên sự thống nhất giữa:", options: ["Khoa học và nghệ thuật", "Điều kiện khách quan và nhân tố chủ quan", "Chính trị và quân sự", "Tôn giáo và xã hội"], correctAnswer: 1 },
      { id: 2, question: "Tiền đề lý luận của triết học Mác không bao gồm:", options: ["Triết học cổ điển Đức", "Kinh tế chính trị học Anh", "Chủ nghĩa xã hội không tưởng Pháp", "Thần học trung cổ"], correctAnswer: 3 },
      { id: 3, question: "Giai cấp nào là cơ sở xã hội của triết học Mác?", options: ["Giai cấp địa chủ", "Giai cấp công nhân", "Giai cấp tư sản", "Nông dân"], correctAnswer: 1 },
      { id: 4, question: "Giai đoạn 1845 – 1848 có ý nghĩa gì?", options: ["Hoàn thiện chủ nghĩa tư bản", "Hình thành nguyên lý cơ bản của triết học Mác", "Xuất hiện triết học Hy Lạp", "Phát triển thần học"], correctAnswer: 1 },
      { id: 5, question: "Tác phẩm nào gắn với sự ra đời của chủ nghĩa cộng sản khoa học?", options: ["Nhà nước và cách mạng", "Tư bản", "Tuyên ngôn của Đảng cộng sản", "Chống Đuyrinh"], correctAnswer: 2 },
      { id: 6, question: "C. Mác và Ph. Ăngghen đã xây dựng:", options: ["Chủ nghĩa duy tâm", "Chủ nghĩa duy vật biện chứng", "Chủ nghĩa thần bí", "Chủ nghĩa kinh viện"], correctAnswer: 1 },
      { id: 7, question: "Triết học Mác mang đặc điểm:", options: ["Chỉ mang tính khoa học", "Chỉ mang tính cách mạng", "Vừa khoa học vừa cách mạng", "Mang tính thần học"], correctAnswer: 2 },
      { id: 8, question: "Triết học Mác nhấn mạnh vai trò của:", options: ["Tôn giáo", "Thực tiễn", "Thần học", "Cảm giác cá nhân"], correctAnswer: 1 },
      { id: 9, question: "Người bảo vệ và phát triển triết học Mác trong thời kỳ đế quốc chủ nghĩa là:", options: ["Hegel", "Kant", "Lênin", "Feuerbach"], correctAnswer: 2 },
      { id: 10, question: "Một tác phẩm tiêu biểu của Lênin là:", options: ["Gia đình thần thánh", "Tư bản", "Nhà nước và cách mạng", "Luận cương Feuerbach"], correctAnswer: 2 },
    ],
    flashcards: [
      { id: 1, question: "Triết học Mác ra đời dựa trên điều gì?", answer: "Điều kiện khách quan và nhân tố chủ quan" },
      { id: 2, question: "Tiền đề lý luận của triết học Mác gồm gì?", answer: "Triết học Đức, KTCT Anh, CNXH không tưởng Pháp" },
      { id: 3, question: "Giai cấp nền tảng của triết học Mác?", answer: "Giai cấp công nhân" },
      { id: 4, question: "Giai đoạn 1841 – 1844 là gì?", answer: "Chuyển từ duy tâm sang duy vật" },
      { id: 5, question: "Giai đoạn 1845 – 1848 có ý nghĩa gì?", answer: "Hình thành nguyên lý triết học Mác" },
      { id: 6, question: "Tác phẩm nổi tiếng năm 1848?", answer: "Tuyên ngôn của Đảng cộng sản" },
      { id: 7, question: "C. Mác và Ăngghen sáng tạo ra gì?", answer: "Chủ nghĩa duy vật biện chứng" },
      { id: 8, question: "Chủ nghĩa duy vật lịch sử nghiên cứu gì?", answer: "Xã hội và lịch sử loài người" },
      { id: 9, question: "Triết học Mác mang tính gì?", answer: "Khoa học và cách mạng" },
      { id: 10, question: "Triết học Mác đề cao vai trò gì?", answer: "Vai trò của thực tiễn" },
      { id: 11, question: "Ai phát triển triết học Mác ở thế kỷ XX?", answer: "V.I. Lênin" },
      { id: 12, question: "Lênin đấu tranh chống gì?", answer: "Các quan điểm duy tâm" },
      { id: 13, question: "Một tác phẩm tiêu biểu của Lênin?", answer: "Nhà nước và cách mạng" },
      { id: 14, question: "Triết học Mác – Lênin nghiên cứu gì?", answer: "Quy luật vận động chung nhất" },
      { id: 15, question: "Triết học Mác – Lênin có vai trò gì?", answer: "Định hướng nhận thức và cải tạo xã hội" },
    ],
  },
  {
    id: "4",
    title: "Đối Tượng & Chức Năng Triết Học Mác – Lênin",
    subtitle: "Khái niệm, đối tượng nghiên cứu và chức năng",
    content: {
      sections: [
        {
          title: "Khái niệm triết học Mác – Lênin",
          paragraphs: [
            "Triết học Mác – Lênin là hệ thống quan điểm duy vật biện chứng về tự nhiên, xã hội và tư duy; là thế giới quan và phương pháp luận khoa học của giai cấp công nhân cùng các lực lượng tiến bộ trong xã hội.",
            "Triết học Mác – Lênin được xây dựng bởi C. Mác và Ph. Ăngghen, sau đó được V.I. Lênin bảo vệ và phát triển trong điều kiện lịch sử mới. Đây là hình thức phát triển cao nhất của chủ nghĩa duy vật và phép biện chứng trong lịch sử triết học.",
            "Triết học Mác – Lênin không chỉ giải thích thế giới mà còn hướng con người đến việc cải tạo thế giới thông qua hoạt động thực tiễn.",
          ],
        },
        {
          title: "Đối tượng của triết học Mác – Lênin",
          paragraphs: [
            "Triết học Mác – Lênin nghiên cứu những quy luật vận động và phát triển chung nhất của tự nhiên, xã hội và tư duy.",
            "Khác với các khoa học cụ thể chỉ nghiên cứu từng lĩnh vực riêng biệt, triết học Mác – Lênin nghiên cứu những quy luật chung nhất chi phối toàn bộ thế giới.",
            "Ngoài ra, triết học Mác – Lênin còn nghiên cứu mối quan hệ giữa vật chất và ý thức, giữa tồn tại xã hội và tư duy con người nhằm xây dựng thế giới quan khoa học và phương pháp nhận thức đúng đắn.",
          ],
        },
        {
          title: "Chức năng của triết học Mác – Lênin",
          paragraphs: [
            "Chức năng thế giới quan: Triết học Mác – Lênin giúp con người có cách nhìn khoa học về thế giới, hiểu đúng bản chất của tự nhiên, xã hội và con người. Từ đó hình thành thế giới quan duy vật biện chứng.",
            "Chức năng phương pháp luận: Triết học Mác – Lênin cung cấp những nguyên tắc và phương pháp chung giúp con người nhận thức và cải tạo thế giới một cách đúng đắn, khoa học và hiệu quả.",
            "Vai trò thực tiễn: Triết học Mác – Lênin định hướng cho hoạt động thực tiễn, góp phần cải tạo xã hội và thúc đẩy sự phát triển của con người.",
          ],
        },
      ],
    },
    summary: {
      sections: [
        {
          title: "Khái niệm triết học Mác – Lênin",
          points: [
            { text: "Hệ thống quan điểm duy vật biện chứng." },
            { text: "Thế giới quan và phương pháp luận khoa học của giai cấp công nhân." },
          ],
          memorize: "Triết học Mác – Lênin = duy vật biện chứng + phương pháp khoa học.",
        },
        {
          title: "Đối tượng của triết học Mác – Lênin",
          points: [
            { text: "Quy luật chung nhất của tự nhiên." },
            { text: "Quy luật chung nhất của xã hội." },
            { text: "Quy luật chung nhất của tư duy." },
          ],
          memorize: "Triết học nghiên cứu cái chung nhất của thế giới.",
        },
        {
          title: "Chức năng của triết học Mác – Lênin",
          points: [
            { text: "Chức năng thế giới quan: Giúp con người nhìn nhận thế giới một cách khoa học." },
            { text: "Chức năng phương pháp luận: Cung cấp phương pháp nhận thức và cải tạo thế giới." },
          ],
          memorize: "Triết học giúp con người hiểu đúng và hành động đúng.",
        },
      ],
    },
    quiz: [
      { id: 1, question: "Triết học Mác – Lênin là gì?", options: ["Hệ thống thần học", "Hệ thống quan điểm duy vật biện chứng", "Hệ thống mê tín", "Hệ thống nghệ thuật"], correctAnswer: 1 },
      { id: 2, question: "Người xây dựng nền tảng triết học Mác là ai?", options: ["Plato và Aristotle", "Kant và Hegel", "C. Mác và Ph. Ăngghen", "Feuerbach và Hume"], correctAnswer: 2 },
      { id: 3, question: "Người phát triển triết học Mác trong giai đoạn mới là ai?", options: ["Hegel", "Lênin", "Berkeley", "Kant"], correctAnswer: 1 },
      { id: 4, question: "Triết học Mác – Lênin nghiên cứu gì?", options: ["Một lĩnh vực khoa học riêng", "Quy luật chung nhất của tự nhiên, xã hội và tư duy", "Chỉ nghiên cứu xã hội", "Chỉ nghiên cứu tự nhiên"], correctAnswer: 1 },
      { id: 5, question: "Đối tượng nghiên cứu của triết học Mác – Lênin không bao gồm:", options: ["Tự nhiên", "Xã hội", "Tư duy", "Nghệ thuật biểu diễn"], correctAnswer: 3 },
      { id: 6, question: "Triết học Mác – Lênin là thế giới quan của giai cấp nào?", options: ["Địa chủ", "Tư sản", "Công nhân", "Quý tộc"], correctAnswer: 2 },
      { id: 7, question: "Chức năng thế giới quan giúp con người:", options: ["Giải trí", "Hiểu đúng thế giới", "Tạo mê tín", "Xây dựng thần học"], correctAnswer: 1 },
      { id: 8, question: "Chức năng phương pháp luận có vai trò:", options: ["Cung cấp phương pháp nhận thức và cải tạo thế giới", "Phát triển tín ngưỡng", "Xây dựng nghệ thuật", "Tạo ra mê tín"], correctAnswer: 0 },
      { id: 9, question: "Triết học Mác – Lênin nhấn mạnh vai trò của:", options: ["Thần học", "Cảm giác cá nhân", "Thực tiễn", "Mê tín"], correctAnswer: 2 },
      { id: 10, question: "Triết học Mác – Lênin thuộc thế giới quan nào?", options: ["Thế giới quan thần thoại", "Thế giới quan duy vật biện chứng", "Thế giới quan duy tâm", "Thế giới quan tôn giáo"], correctAnswer: 1 },
      { id: 11, question: "Khác với khoa học cụ thể, triết học Mác – Lênin nghiên cứu:", options: ["Từng lĩnh vực riêng biệt", "Quy luật chung nhất", "Chỉ kinh tế", "Chỉ chính trị"], correctAnswer: 1 },
      { id: 12, question: "Triết học Mác – Lênin có vai trò gì?", options: ["Định hướng nhận thức và hành động", "Chỉ giải trí", "Chỉ nghiên cứu lịch sử", "Tạo tín ngưỡng mới"], correctAnswer: 0 },
      { id: 13, question: "Triết học Mác – Lênin là sự phát triển cao nhất của:", options: ["Chủ nghĩa duy vật và phép biện chứng", "Chủ nghĩa duy tâm", "Thần học trung đại", "Chủ nghĩa kinh viện"], correctAnswer: 0 },
      { id: 14, question: "Triết học Mác – Lênin không chỉ giải thích thế giới mà còn:", options: ["Phủ nhận khoa học", "Cải tạo thế giới", "Xây dựng mê tín", "Phát triển thần học"], correctAnswer: 1 },
      { id: 15, question: "Triết học Mác – Lênin giúp con người:", options: ["Hiểu đúng và hành động đúng", "Từ bỏ khoa học", "Chỉ tin vào cảm giác", "Không cần thực tiễn"], correctAnswer: 0 },
    ],
    flashcards: [
      { id: 1, question: "Triết học Mác – Lênin là gì?", answer: "Hệ thống quan điểm duy vật biện chứng" },
      { id: 2, question: "Ai xây dựng triết học Mác?", answer: "C. Mác và Ph. Ăngghen" },
      { id: 3, question: "Ai phát triển triết học Mác trong thời đại mới?", answer: "V.I. Lênin" },
      { id: 4, question: "Triết học Mác – Lênin nghiên cứu gì?", answer: "Quy luật chung nhất của tự nhiên, xã hội và tư duy" },
      { id: 5, question: "Đối tượng nghiên cứu của triết học gồm những gì?", answer: "Tự nhiên, xã hội và tư duy" },
      { id: 6, question: "Triết học Mác – Lênin là thế giới quan của ai?", answer: "Giai cấp công nhân" },
      { id: 7, question: "Chức năng thế giới quan là gì?", answer: "Giúp con người hiểu đúng thế giới" },
      { id: 8, question: "Chức năng phương pháp luận là gì?", answer: "Cung cấp phương pháp nhận thức và cải tạo thế giới" },
      { id: 9, question: "Triết học Mác – Lênin nhấn mạnh vai trò gì?", answer: "Vai trò của thực tiễn" },
      { id: 10, question: "Triết học Mác – Lênin thuộc thế giới quan nào?", answer: "Thế giới quan duy vật biện chứng" },
      { id: 11, question: "Triết học khác khoa học cụ thể ở điểm nào?", answer: "Nghiên cứu quy luật chung nhất" },
      { id: 12, question: "Triết học Mác – Lênin giúp con người làm gì?", answer: "Nhận thức và cải tạo thế giới" },
      { id: 13, question: "Triết học Mác – Lênin mang tính gì?", answer: "Tính khoa học và cách mạng" },
      { id: 14, question: "Vai trò của triết học đối với con người là gì?", answer: "Định hướng nhận thức và hành động" },
      { id: 15, question: "Triết học Mác – Lênin là sự phát triển cao nhất của gì?", answer: "Chủ nghĩa duy vật và phép biện chứng" },
    ],
  },
  {
    id: "5",
    title: "Vật Chất & Phương Thức Tồn Tại",
    subtitle: "Quan niệm về vật chất và cách mạng khoa học tự nhiên",
    content: {
      sections: [
        {
          title: "Quan niệm về phạm trù vật chất trước Mác",
          paragraphs: [
            "Chủ nghĩa duy tâm thừa nhận sự tồn tại của các sự vật và hiện tượng nhưng lại phủ nhận tính tồn tại khách quan của chúng. Theo quan điểm này, thế giới vật chất phụ thuộc vào ý thức hoặc tinh thần. Ý thức được xem là cái có trước và quyết định thế giới vật chất.",
            "Các nhà triết học duy vật thời cổ đại cho rằng vật chất là cơ sở đầu tiên tạo nên thế giới. Tuy nhiên, họ thường đồng nhất vật chất với một dạng vật thể cụ thể. Ở Trung Hoa cổ đại: Kim, Mộc, Thủy, Hỏa, Thổ. Ở Ấn Độ cổ đại: đất, nước, lửa, không khí. Tại Hy Lạp cổ đại: Thalès (nước), Heraclite (lửa), Démocrite (nguyên tử).",
            "Đến thế kỷ XVII – XVIII, dưới ảnh hưởng của cơ học cổ điển, nhiều nhà triết học duy vật đồng nhất vật chất với khối lượng và giải thích thế giới như một cỗ máy cơ học. Họ tách rời vật chất khỏi vận động, không gian và thời gian; nhìn sự vật theo hướng cô lập, tĩnh tại nên mang hạn chế siêu hình và máy móc.",
          ],
        },
        {
          title: "Cuộc cách mạng trong khoa học tự nhiên cuối thế kỷ XIX – đầu thế kỷ XX",
          paragraphs: [
            "Cuối thế kỷ XIX – đầu thế kỷ XX, nhiều phát minh khoa học quan trọng ra đời: Rơn-ghen phát hiện tia X, Béc-cơ-ren phát hiện hiện tượng phóng xạ, Tômxơn phát hiện điện tử, Kaufman chứng minh khối lượng điện tử thay đổi theo vận tốc, A. Anhxtanh xây dựng thuyết tương đối.",
            "Những phát minh này làm lung lay quan niệm cũ cho rằng nguyên tử là phần tử nhỏ nhất và bất biến của vật chất. Chủ nghĩa duy tâm đã lợi dụng điều này để cho rằng \"vật chất tiêu tan\".",
            "Tuy nhiên, V.I. Lênin khẳng định vật lý học không khủng hoảng mà đang bước vào một cuộc cách mạng khoa học mới. Cái mất đi không phải là vật chất mà là giới hạn hiểu biết cũ của con người về vật chất. Những phát minh mới chỉ làm cho nhận thức của con người về thế giới vật chất trở nên đầy đủ và sâu sắc hơn.",
          ],
        },
      ],
    },
    summary: {
      sections: [
        {
          title: "Quan niệm về vật chất trước Mác",
          points: [
            { text: "Chủ nghĩa duy tâm: Ý thức quyết định vật chất." },
            { text: "Chủ nghĩa duy vật cổ đại: Vật chất là cơ sở của thế giới nhưng bị đồng nhất với vật thể cụ thể." },
            { text: "Chủ nghĩa duy vật siêu hình: Giải thích thế giới theo kiểu máy móc, cơ học." },
          ],
          memorize: "Duy tâm → ý thức trước. Duy vật → vật chất trước.",
        },
        {
          title: "Cuộc cách mạng khoa học tự nhiên",
          points: [
            { text: "Các phát minh cuối thế kỷ XIX – đầu XX đã làm thay đổi hiểu biết cũ về vật chất." },
            { text: "Bác bỏ quan điểm duy vật siêu hình." },
            { text: "Mở đường cho quan điểm duy vật biện chứng." },
          ],
          memorize: "Không phải vật chất tiêu tan, mà giới hạn hiểu biết cũ bị phá vỡ.",
        },
      ],
    },
    quiz: [
      { id: 1, question: "Chủ nghĩa duy tâm cho rằng:", options: ["Vật chất tồn tại khách quan", "Ý thức quyết định vật chất", "Vật chất quyết định ý thức", "Không tồn tại ý thức"], correctAnswer: 1 },
      { id: 2, question: "Các nhà duy vật cổ đại thường:", options: ["Phủ nhận vật chất", "Đồng nhất vật chất với vật thể cụ thể", "Xem vật chất là tinh thần", "Cho rằng thế giới không tồn tại"], correctAnswer: 1 },
      { id: 3, question: "Thalès cho rằng nguồn gốc của vũ trụ là:", options: ["Lửa", "Không khí", "Nước", "Nguyên tử"], correctAnswer: 2 },
      { id: 4, question: "Heraclite xem yếu tố cơ bản của thế giới là:", options: ["Đất", "Lửa", "Nước", "Không khí"], correctAnswer: 1 },
      { id: 5, question: "Démocrite cho rằng thế giới được tạo thành từ:", options: ["Tinh thần", "Nguyên tử", "Ý niệm", "Khí"], correctAnswer: 1 },
      { id: 6, question: "Chủ nghĩa duy vật siêu hình chịu ảnh hưởng mạnh của:", options: ["Tôn giáo", "Cơ học cổ điển", "Nghệ thuật", "Tâm lý học"], correctAnswer: 1 },
      { id: 7, question: "Quan điểm duy vật siêu hình nhìn thế giới như:", options: ["Một quá trình phát triển liên tục", "Một cỗ máy cơ học", "Một thế giới tinh thần", "Một giấc mơ"], correctAnswer: 1 },
      { id: 8, question: "Ai phát hiện ra tia X?", options: ["Béc-cơ-ren", "Tômxơn", "Rơn-ghen", "Anhxtanh"], correctAnswer: 2 },
      { id: 9, question: "Ai phát hiện ra điện tử?", options: ["Tômxơn", "Kaufman", "Rơn-ghen", "Newton"], correctAnswer: 0 },
      { id: 10, question: "A. Anhxtanh nổi tiếng với:", options: ["Thuyết tiến hóa", "Thuyết tương đối", "Thuyết nguyên tử", "Thuyết hấp dẫn"], correctAnswer: 1 },
      { id: 11, question: "Chủ nghĩa duy tâm đã lợi dụng các phát minh khoa học để cho rằng:", options: ["Vật chất phát triển hơn", "Vật chất tiêu tan", "Ý thức biến mất", "Khoa học sai lầm"], correctAnswer: 1 },
      { id: 12, question: "Theo Lênin, cái \"tiêu tan\" thực chất là:", options: ["Vật chất", "Nguyên tử", "Giới hạn hiểu biết cũ của con người", "Khoa học tự nhiên"], correctAnswer: 2 },
      { id: 13, question: "V.I. Lênin cho rằng vật lý học đang:", options: ["Khủng hoảng hoàn toàn", "Bước vào cuộc cách mạng khoa học", "Phủ nhận vật chất", "Phát triển thần học"], correctAnswer: 1 },
      { id: 14, question: "Các phát minh khoa học cuối thế kỷ XIX – đầu XX đã:", options: ["Bác bỏ khoa học", "Làm rõ hơn hiểu biết về vật chất", "Phủ nhận vật chất", "Chứng minh thế giới duy tâm"], correctAnswer: 1 },
      { id: 15, question: "Ý nghĩa của cuộc cách mạng khoa học tự nhiên là:", options: ["Khẳng định duy tâm", "Mở đường cho duy vật biện chứng", "Phủ nhận khoa học", "Tạo ra thần học mới"], correctAnswer: 1 },
    ],
    flashcards: [
      { id: 1, question: "Chủ nghĩa duy tâm cho rằng gì?", answer: "Ý thức quyết định vật chất" },
      { id: 2, question: "Chủ nghĩa duy vật cho rằng gì?", answer: "Vật chất có trước và quyết định ý thức" },
      { id: 3, question: "Các nhà duy vật cổ đại thường đồng nhất vật chất với gì?", answer: "Vật thể cụ thể (nước, lửa, nguyên tử...)" },
      { id: 4, question: "Thalès cho rằng gì?", answer: "Nước là nguồn gốc của vũ trụ" },
      { id: 5, question: "Heraclite cho rằng gì?", answer: "Lửa là yếu tố cơ bản của thế giới" },
      { id: 6, question: "Démocrite cho rằng gì?", answer: "Thế giới được tạo thành từ nguyên tử" },
      { id: 7, question: "Duy vật siêu hình nhìn thế giới như thế nào?", answer: "Như một cỗ máy cơ học" },
      { id: 8, question: "Ai phát hiện tia X?", answer: "Rơn-ghen" },
      { id: 9, question: "Ai phát hiện điện tử?", answer: "Tômxơn" },
      { id: 10, question: "Anhxtanh nổi tiếng với gì?", answer: "Thuyết tương đối" },
      { id: 11, question: "Chủ nghĩa duy tâm lợi dụng khoa học để nói gì?", answer: "\"Vật chất tiêu tan\"" },
      { id: 12, question: "Theo Lênin, cái tiêu tan thực chất là gì?", answer: "Giới hạn hiểu biết cũ của con người" },
      { id: 13, question: "Lênin cho rằng vật lý học đang làm gì?", answer: "Bước vào cuộc cách mạng khoa học" },
      { id: 14, question: "Ý nghĩa của cuộc cách mạng khoa học tự nhiên?", answer: "Mở đường cho duy vật biện chứng" },
      { id: 15, question: "Các phát minh khoa học cuối thế kỷ XIX–XX có ý nghĩa gì?", answer: "Làm rõ hơn hiểu biết về vật chất" },
    ],
  },
  {
    id: "6",
    title: "Vật Chất Và Các Phương Thức Tồn Tại Của Vật Chất",
    subtitle: "Vật chất, vận động, không gian, thời gian và ý thức",
    content: {
      sections: [
        {
          title: "a. Vật chất là gì?",
          paragraphs: [
            "Vật chất là phạm trù triết học dùng để chỉ thực tại khách quan được đem lại cho con người trong cảm giác, được cảm giác của chúng ta chép lại, chụp lại, phản ánh và tồn tại không lệ thuộc vào cảm giác."
          ]
        },
        {
          title: "b. Quan điểm duy vật biện chứng về vận động",
          paragraphs: [
            "Vận động là mọi sự biến đổi nói chung.",
            "→ \"Vận động là thuộc tính cố hữu của vật chất\", \"là phương thức tồn tại của vật chất\".",
            "Vận động của vật chất là sự tự thân vận động.",
            "Vận động của vật chất không tự sinh ra, cũng không tự mất đi."
          ]
        },
        {
          title: "c. Các hình thức vận động cơ bản của vật chất",
          paragraphs: [
            "Có 5 hình thức vận động cơ bản: Cơ giới, Vật lý, Hóa học, Sinh học, Xã hội."
          ]
        },
        {
          title: "d. Mối quan hệ giữa vận động và đứng im",
          paragraphs: [
            "Đứng im chỉ là tạm thời, còn vận động là tuyệt đối."
          ]
        },
        {
          title: "e. Không gian và thời gian – các hình thức tồn tại của vật chất",
          paragraphs: [
            "- Không gian và thời gian là những hình thức tồn tại của vật chất."
          ]
        },
        {
          title: "3. Mối quan hệ giữa vật chất và ý thức",
          paragraphs: [
            "Thế giới thống nhất ở tính vật chất → mọi thứ đều liên hệ với nhau."
          ]
        }
      ]
    },
    summary: {
      sections: [
        {
          title: "VẬT CHẤT VÀ PHƯƠNG THỨC TỒN TẠI",
          points: [
            { text: "Vận động = mọi sự biến đổi của vật chất." },
            { text: "Vật chất luôn vận động → vận động là thuộc tính của vật chất." },
            { text: "5 hình thức vận động: Cơ giới, Vật lý, Hóa học, Sinh học, Xã hội" },
            { text: "Đứng im chỉ là tạm thời, còn vận động là tuyệt đối." },
            { text: "Không gian & thời gian là hình thức tồn tại của vật chất." },
            { text: "Thế giới thống nhất ở tính vật chất → mọi thứ đều liên hệ với nhau." }
          ],
          memorize: "Vật chất luôn vận động trong không gian – thời gian."
        }
      ]
    },
    quiz: [],
    flashcards: []
  },
  {
    id: "7",
    title: "Nguồn Gốc, Bản Chất Và Kết Cấu Của Ý Thức",
    subtitle: "Nguồn gốc tự nhiên, xã hội, bản chất và cấu trúc của ý thức",
    content: {
      sections: [
        {
          title: "1. NGUỒN GỐC CỦA Ý THỨC",
          paragraphs: [
            "1a. Nguồn gốc tự nhiên của ý thức: Ý thức là thuộc tính của một dạng vật chất có tổ chức cao là bộ óc con người. Bộ óc là cơ quan phản ánh thế giới khách quan thông qua các giác quan. Bộ óc người, cùng với thế giới bên ngoài tác động lên bộ óc chính là nguồn gốc tự nhiên của ý thức.",
            "1b. Nguồn gốc xã hội: Nguồn gốc tự nhiên chưa đủ mà còn cần phải có lao động, ngôn ngữ và những quan hệ xã hội thì ý thức mới ra đời.",
            "- Lao động: Là điều kiện đầu tiên và chủ yếu để con người tồn tại, đồng thời sáng tạo ra con người, cải tạo con người. Qua lao động mang tỉnh tập thế xã hội làm xuất hiện tư duy, trí thức, kinh nghiệm. VD: Lao động nông nghiệp tạo kinh nghiệm; lao động khoa học tạo tri thức khoa học.",
            "- Ngôn ngữ: Là hệ thống tín hiệu vật chất mang nội dung ý thức. Không có ngôn ngữ thì ý thức không thể tôn tại và thể hiện được. VD: Con người giao tiếp, trao đổi thông tin bằng ngôn ngữ.",
            "=> Nguồn gốc xã hội là quan trọng nhất, quyết định sự ra đời và phát triển của ý thức, trong đó hai yếu tố chính là lao động và thực tiễn xã hội.",
            "KẾT LUẬN: Vật chất và ý thức có mối liên hệ biện chứng, hệ thống nhất với nhau: Vật chất quyết định ý thức, đồng thời ý thức tác động trở lại vật chất thông qua hoạt động thực tiễn của con người."
          ]
        },
        {
          title: "2. BẢN CHẤT CỦA Ý THỨC",
          paragraphs: [
            "Ý thức là sự phản ánh hiện thực khách quan vào bộ óc con người một cách năng động, sáng tạo."
          ]
        },
        {
          title: "3. KẾT CẤU CỦA Ý THỨC",
          paragraphs: [
            "Ý thức được hiểu là một hiện tượng tâm lý xã hội có kết cấu phức tạp. Tùy theo cách tiếp cận, có thể chia cấu trúc của ý thức theo 2 chiều:",
            "Xét theo chiều ngang (Kết cấu theo các yếu tố hợp thành): Bao gồm: Tri thức, Tình cảm, Niềm tin, Lý trí, Ý chí..., trong đó tri thức là yếu tố cơ bản.",
            "- Tri thức: Kết quả quá trình nhận thức của con người về thế giới hiện thực, làm tái hiện trong tư tưởng những thuộc tính, quy luật của thế giới ấy và diễn đạt chúng dưới dạng ngôn ngữ hoặc ký hiệu.",
            "- Lý trí: Là khả năng xác định logic, lập kế hoạch và nêu lên thực hiện đến cũng để đạt mục đích đề ra.",
            "- Niềm tin: Là sự tin tưởng vào một điều gì đó dựa trên cơ sở kinh nghiệm và tình cảm.",
            "- Tình cảm: Là sự cảm động của con người trong quan hệ của mình với thực tại xung quanh và đối với bản thân minh.",
            "- Ý chí: Là khả năng xác định mục đích, kiên quyết theo đuổi mục đích đã chọn, vượt qua mọi khó khăn để thực hiện."
          ]
        }
      ]
    },
    summary: {
      sections: [
        {
          title: "1. Nguồn gốc ý thức",
          points: [
            { text: "Tự nhiên: bộ óc người + thế giới khách quan." },
            { text: "Xã hội: lao động + ngôn ngữ (quan trọng nhất)." }
          ],
          memorize: "Ý thức = Bộ óc + Lao động + Ngôn ngữ"
        },
        {
          title: "2. Bản chất ý thức",
          points: [
            { text: "Ý thức là sự phản ánh sáng tạo thế giới khách quan vào não người." },
            { text: "Mang tính: Chủ quan, Sáng tạo, Xã hội – lịch sử." }
          ],
          memorize: "Ý thức phản ánh thế giới bằng tư duy con người."
        },
        {
          title: "3. Kết cấu ý thức",
          points: [
            { text: "Theo chiều ngang: Tri thức (quan trọng nhất), Tình cảm, Niềm tin, Ý chí…" },
            { text: "Theo chiều dọc: Tự ý thức, Tiềm thức, Vô thức." }
          ],
          memorize: "Tri thức là lõi của ý thức."
        }
      ]
    },
    quiz: [],
    flashcards: []
  },
  {
    id: "8",
    title: "Mối Quan Hệ Giữa Vật Chất Và Ý Thức",
    subtitle: "Quan điểm các trường phái, duy vật biện chứng và ý nghĩa phương pháp luận",
    content: {
      sections: [
        {
          title: "1. QUAN ĐIỂM CỦA CÁC TRƯỜNG PHÁI TRIẾT HỌC",
          paragraphs: [
            "a. Chủ nghĩa duy tâm (CNDT): Cho rằng ý thức/tinh thần là cái có trước và quyết định vật chất. Phủ nhận tính khách quan của thế giới vật chất. Dễ dẫn đến tư tưởng duy ý chí, hành động bất chấp quy luật khách quan.",
            "b. Chủ nghĩa duy vật siêu hình (CNDVSH): Tuyệt đối hóa vai trò của vật chất. Xem nhẹ tính độc lập tương đối và vai trò sáng tạo của ý thức. Dễ dẫn đến thái độ thụ động, ỷ lại trong thực tiễn."
          ]
        },
        {
          title: "2. QUAN ĐIỂM CỦA CHỦ NGHĨA DUY VẬT BIỆN CHỨNG",
          paragraphs: [
            "a. Vật chất quyết định ý thức: Theo chủ nghĩa duy vật biện chứng: Vật chất quyết định nguồn gốc của ý thức, quyết định nội dung của ý thức, quyết định bản chất của ý thức, quyết định sự vận động và phát triển của ý thức. => Ý thức là sự phản ánh thế giới vật chất vào bộ óc con người.",
            "b. Ý thức có tính độc lập tương đối và tác động trở lại vật chất: Ý thức không hoàn toàn thụ động mà có khả năng tác động lại thế giới vật chất thông qua hoạt động của con người.",
            "Các biểu hiện: 1. Ý thức tác động trở lại thế giới vật chất nhưng thường chậm hơn sự biến đổi vật chất. 2. Ý thức chỉ tác động thông qua hoạt động thực tiễn của con người. 3. Ý thức giữ vai trò chỉ đạo hoạt động thực tiễn. 4. Xã hội càng phát triển thì vai trò của ý thức càng lớn."
          ]
        },
        {
          title: "3. Ý NGHĨA PHƯƠNG PHÁP LUẬN",
          paragraphs: [
            "Trong nhận thức và thực tiễn cần:",
            "a. Xuất phát từ thực tế khách quan: Tôn trọng hiện thực khách quan. Tôn trọng quy luật khách quan. Không hành động theo cảm tính hay duy ý chí.",
            "b. Phát huy tính năng động chủ quan: Phát huy tính tích cực, sáng tạo của con người. Chủ động học tập và nghiên cứu khoa học. Biến tri thức thành hành động thực tiễn.",
            "KẾT LUẬN: Vật chất có trước, ý thức có sau và do vật chất quyết định. Tuy nhiên ý thức có tính độc lập tương đối và có thể tác động ngược trở lại vật chất thông qua hoạt động thực tiễn của con người. Trong học tập và cuộc sống cần vừa tôn trọng thực tế khách quan, vừa phát huy tính chủ động, sáng tạo của bản thân."
          ]
        }
      ]
    },
    summary: {
      sections: [
        {
          title: "Quan điểm duy vật biện chứng",
          points: [
            { text: "Vật chất quyết định ý thức: nguồn gốc, nội dung, sự phát triển của ý thức." },
            { text: "Ý thức tác động ngược lại vật chất thông qua hoạt động thực tiễn." }
          ],
          memorize: "Vật chất quyết định – Ý thức tác động lại."
        },
        {
          title: "Ý nghĩa phương pháp luận",
          points: [
            { text: "Tôn trọng thực tế khách quan." },
            { text: "Phát huy tính chủ động sáng tạo." }
          ],
          memorize: "Tôn trọng thực tế + Chủ động sáng tạo."
        }
      ]
    },
    quiz: [],
    flashcards: []
  },
  {
    id: "16",
    title: "Nội Dung Của Phép Biện Chứng Duy Vật",
    subtitle: "Nguyên lý mối liên hệ phổ biến và nguyên lý về sự phát triển",
    content: {
      sections: [
        {
          title: "NGUYÊN LÝ VỀ MỐI LIÊN HỆ PHỔ BIẾN",
          paragraphs: [
            "Khái niệm: Mối liên hệ là sự tác động, quy định và chuyển hóa lẫn nhau giữa các sự vật, hiện tượng hoặc giữa các yếu tố bên trong một sự vật.",
            "1. Tính chất của mối liên hệ: a. Tính khách quan: Mối liên hệ tồn tại vốn có trong mọi sự vật, hiện tượng. b. Tính phổ biến: Mối liên hệ xuất hiện trong mọi lĩnh vực: tự nhiên, xã hội, tư duy. c. Tính đa dạng, phong phú: Có nhiều loại mối liên hệ khác nhau tùy theo cách phân loại.",
            "Các loại mối liên hệ: Bên trong – bên ngoài, Trực tiếp – gián tiếp, Chung – riêng, Chủ yếu – thứ yếu, Bản chất – không bản chất, Cơ bản – không cơ bản, Tất nhiên – ngẫu nhiên, Nền tảng – phái sinh.",
            "Ý nghĩa phương pháp luận: Trong nhận thức và thực tiễn cần: Quan điểm toàn diện (Xem xét sự vật trong tất cả các mối liên hệ của nó). Quan điểm lịch sử – cụ thể (Đặt sự vật trong hoàn cảnh không gian và thời gian cụ thể)."
          ]
        },
        {
          title: "NGUYÊN LÝ VỀ SỰ PHÁT TRIỂN",
          paragraphs: [
            "Khái niệm phát triển: Phát triển là quá trình vận động đi lên: từ thấp đến cao, từ đơn giản đến phức tạp, từ chưa hoàn thiện đến hoàn thiện hơn.",
            "Đặc trưng của sự phát triển: Là sự biến đổi về chất theo hướng tiến bộ. Phát triển khác với tăng trưởng.",
            "Tính chất của sự phát triển: a. Tính khách quan: Do các quy luật khách quan chi phối. b. Tính phổ biến: Diễn ra trong mọi lĩnh vực và mọi sự vật hiện tượng. c. Tính phong phú, đa dạng: Mỗi sự vật phát triển khác nhau tùy điều kiện lịch sử cụ thể.",
            "KHÁI QUÁT NỘI DUNG NGUYÊN LÝ VỀ SỰ PHÁT TRIỂN: Sự vật luôn vận động và biến đổi. Cái mới dần thay thế cái cũ. Xu hướng chung của thế giới là vận động đi lên và phát triển.",
            "Ý NGHĨA PHƯƠNG PHÁP LUẬN: Quan điểm phát triển. Trong học tập và thực tiễn cần: Nhìn nhận sự vật trong quá trình vận động và phát triển. Không bảo thủ, trì trệ. Biết phát hiện và ủng hộ cái mới tiến bộ."
          ]
        }
      ]
    },
    summary: {
      sections: [
        {
          title: "Nội dung chính",
          points: [
            { text: "Mẹo nhớ: 2 nguyên lý – 3 quy luật – 6 phạm trù." }
          ],
          memorize: "2 nguyên lý – 3 quy luật – 6 phạm trù."
        },
        {
          title: "Nguyên lý mối liên hệ phổ biến",
          points: [
            { text: "Mọi sự vật đều: liên hệ, tác động, chuyển hóa lẫn nhau." }
          ],
          memorize: "Không gì tồn tại riêng lẻ."
        },
        {
          title: "Nguyên lý phát triển",
          points: [
            { text: "Phát triển = vận động đi lên: từ thấp → cao, đơn giản → phức tạp." }
          ],
          memorize: "Cái mới thay cái cũ."
        }
      ]
    },
    quiz: [],
    flashcards: []
  }
,
  {
    id: '17',
    title: 'Các Cặp Phạm Trù Cơ Bản Của Phép Biện Chứng Duy Vật',
    subtitle: 'Cái riêng và cái chung, nguyên nhân và kết quả',
    content: {
      sections: [
        {
          title: 'Khái niệm PHẠM TRÙ',
          paragraphs: [
            'SUY LUẬN  -> PHẠM TRÙ -> PHÁN ĐOÁN => là những nấc thang của quá trình nhận thức.',
            'PHẠM TRÙ của một môn khoa học là khái niệm rộng nhất phản ánh những mặt, những thuộc tính, những mối liên hệ chung, cơ bản nhất của các sự vật, hiện tượng, quá trình thuộc lĩnh vực mà môn khoa học đó nghiên cứu.',
            'PHẠM TRÙ TRIẾT HỌC trong phép biện chứng duy vật là phạm trù phổ biến, bởi nó phản ánh những mặt, những thuộc tính, những mối liên hệ cơ bản và phổ biến của toàn bộ thế giới hiện thực, bao gồm: tự nhiên, xã hội và tư duy.'
          ]
        },
        {
          title: 'CÁC CẶP PHẠM TRÙ CƠ BẢN CỦA PHÉP BCDV',
          paragraphs: [
            'Gồm: Cái riêng và cái chung, Nguyên nhân và kết quả, Tất nhiên và ngẫu nhiên, Nội dung và hình thức, Bản chất và hiện tượng, Khả năng và hiện thực.'
          ]
        },
        {
          title: 'a. Cái riêng và cái chung',
          paragraphs: [
            '- Cái riêng để chỉ một SV, HT, một quá trình nhất định.',
            '- Cái chung chỉ những mặt, những thuộc tính, yếu tố, quan hệ tồn tại phổ biến trong nhiều SV, HT.',
            '- Cái đơn nhất là những đặc tính, tính chất chỉ tồn tại ở một SV, HT và không lặp lại ở sự vật khác.',
            'VD: Thế giới động vật bao gồm các cá thể (cái đơn nhất) nhiều loài khác nhau (mỗi loài là một cái riêng) nhưng tất cả đều tuân theo các quy luật chung của sự sống (cái chung).'
          ]
        },
        {
          title: 'Quan hệ biện chứng giữa cái riêng và cái chung',
          paragraphs: [
            'Cái riêng chỉ tồn tại trong mối quan hệ với cái chung, không có cái riêng tách rời cái chung.',
            'Cái riêng là cái toàn bộ, phong phú hơn cái chung, còn cái chung thì sâu sắc hơn cái riêng.'
          ]
        },
        {
          title: 'Ý nghĩa phương pháp luận',
          paragraphs: [
            'Muốn nhận thức được cái chung, cái bản chất thì phải xuất phát từ cái riêng. Nhiệm vụ của nhận thức là phải tìm ra cái chung và trong hoạt động thực tiễn phải dựa vào cái chung để cải tạo cái riêng.',
            'Trong hoạt động thực tiễn ta cần chủ động tác động vào sự chuyển hoá cái mới thành cái chung để phát triển nó, và ngược lại cái cũ thành cái đơn nhất để xóa bỏ nó.',
            'Vận dụng cái chung cần phải xét đến cái đặc thù. Từ các nguyên lý chung của CN Mác - Lênin, Hồ Chí Minh đã vận dụng sáng tạo các nguyên lý đó vào hoàn cảnh lịch sử cụ thể của Việt Nam.'
          ]
        },
        {
          title: 'b. Nguyên nhân và kết quả',
          paragraphs: [
            '- Nguyên nhân là phạm trù triết học dùng để chỉ sự tác động lẫn nhau giữa các mặt trong một sự vật, hiện tượng hay giữa các sự vật, hiện tượng với nhau tạo ra một sự biến đổi nhất định.',
            '- Kết quả là phạm trù triết học dùng để chỉ những biến đổi xuất hiện do những tác động giữa các mặt, các yếu tố trong một sự vật hoặc giữa các sự vật, hiện tượng tạo nên.',
            'MỘT NGUYÊN NHÂN CÓ THỂ DẪN TỚI NHIỀU KẾT QUẢ. Tác động của cuộc cách mạng công nghệ thông tin (nguyên nhân) đã làm biến đổi to lớn và cơ bản nhiều lĩnh vực khác nhau trong đời sống KT-XH.'
          ]
        },
        {
          title: 'Ý nghĩa phương pháp luận',
          paragraphs: [
            'Trong hoạt động nhận thức và hoạt động thực tiễn phải bắt đầu từ việc đi tìm những nguyên nhân xuất hiện sự vật, hiện tượng.',
            'Cần phải phân loại các nguyên nhân để có những biện pháp giải quyết đúng đắn. Phải tận dụng các kết quả đã đạt được để tạo điều kiện thúc đẩy nguyên nhân phát huy tác dụng, nhằm đạt mục đích đã đề ra.'
          ]
        }
      ]
    },
    summary: {
      sections: [
        {
          title: 'Phạm trù là gì?',
          points: [
            { text: 'Khái niệm rộng nhất phản ánh thuộc tính và mối liên hệ cơ bản.' }
          ],
        },
        {
          title: 'Cái riêng và Cái chung',
          points: [
            { text: 'Cái riêng: Một sự vật hoặc hiện tượng cụ thể.' },
            { text: 'Cái chung: Thuộc tính lặp lại ở nhiều sự vật.' },
            { text: 'Cái đơn nhất: Đặc tính chỉ tồn tại ở một sự vật.' },
            { text: 'Cái riêng phong phú hơn, cái chung sâu sắc hơn. Nhận thức phải xuất phát từ cái riêng.' }
          ]
        },
        {
          title: 'Nguyên nhân và Kết quả',
          points: [
            { text: 'Nguyên nhân: Sự tác động tạo ra biến đổi.' },
            { text: 'Kết quả: Biến đổi do nguyên nhân tạo nên.' },
            { text: 'Điều kiện: Yếu tố hỗ trợ nguyên nhân. Nguyên cớ: Yếu tố không có liên hệ bản chất với kết quả.' },
            { text: 'Quan hệ nhân – quả mang tính tất yếu khách quan. Một nguyên nhân có thể sinh ra nhiều kết quả.' }
          ]
        }
      ]
    },
    quiz: [
      { id: 1, question: 'Phạm trù là gì trong triết học?', options: ['Khái niệm riêng lẻ', 'Khái niệm rộng nhất phản ánh thuộc tính chung', 'Ý kiến cá nhân', 'Một hiện tượng xã hội'], correctAnswer: 1 },
      { id: 2, question: '“Cái riêng” dùng để chỉ:', options: ['Quy luật phổ biến', 'Một sự vật hiện tượng cụ thể', 'Tất cả sự vật', 'Một khái niệm trừu tượng'], correctAnswer: 1 },
      { id: 3, question: '“Cái chung” là:', options: ['Đặc điểm chỉ có ở một sự vật', 'Yếu tố ngẫu nhiên', 'Những thuộc tính lặp lại ở nhiều sự vật', 'Một cá thể riêng lẻ'], correctAnswer: 2 },
      { id: 4, question: '“Cái đơn nhất” là:', options: ['Đặc tính không lặp lại ở sự vật khác', 'Quy luật chung', 'Điều kiện phát triển', 'Hiện tượng phổ biến'], correctAnswer: 0 },
      { id: 5, question: 'Cái chung tồn tại thông qua:', options: ['Cái đơn nhất', 'Cái riêng', 'Điều kiện', 'Kết quả'], correctAnswer: 1 },
      { id: 6, question: 'Theo phép biện chứng, cái riêng và cái chung:', options: ['Tách rời nhau', 'Đối lập tuyệt đối', 'Có thể chuyển hóa lẫn nhau', 'Không liên quan'], correctAnswer: 2 },
      { id: 7, question: 'Muốn nhận thức bản chất sự vật cần:', options: ['Xuất phát từ cái riêng', 'Chỉ nghiên cứu lý thuyết', 'Bỏ qua thực tiễn', 'Chỉ quan sát hiện tượng'], correctAnswer: 0 },
      { id: 8, question: 'Nguyên nhân là:', options: ['Kết quả cuối cùng', 'Sự tác động tạo ra biến đổi', 'Một điều kiện phụ', 'Hiện tượng ngẫu nhiên'], correctAnswer: 1 },
      { id: 9, question: 'Kết quả là:', options: ['Sự vật ban đầu', 'Điều kiện khách quan', 'Biến đổi do tác động tạo nên', 'Một dạng nguyên nhân'], correctAnswer: 2 },
      { id: 10, question: 'Điều kiện có vai trò:', options: ['Sinh ra kết quả trực tiếp', 'Hỗ trợ nguyên nhân tạo kết quả', 'Không ảnh hưởng', 'Thay thế nguyên nhân'], correctAnswer: 1 },
      { id: 11, question: 'Nguyên nhân và kết quả có mối quan hệ:', options: ['Tách biệt', 'Chủ quan', 'Tất yếu khách quan', 'Ngẫu nhiên hoàn toàn'], correctAnswer: 2 },
      { id: 12, question: 'Một nguyên nhân có thể tạo ra:', options: ['Chỉ một kết quả', 'Không tạo ra kết quả', 'Nhiều kết quả khác nhau', 'Một điều kiện duy nhất'], correctAnswer: 2 },
      { id: 13, question: 'Trong hoạt động thực tiễn cần làm gì trước tiên?', options: ['Đi tìm nguyên nhân', 'Chờ kết quả', 'Phủ nhận hiện tượng', 'Bỏ qua điều kiện'], correctAnswer: 0 },
      { id: 14, question: 'Hồ Chí Minh đã vận dụng sáng tạo chủ nghĩa Mác – Lênin vào:', options: ['Châu Âu', 'Việt Nam', 'Mỹ Latinh', 'Châu Phi'], correctAnswer: 1 },
      { id: 15, question: 'Nhiệm vụ của nhận thức là:', options: ['Tìm ra cái chung', 'Loại bỏ thực tiễn', 'Chỉ nghiên cứu cá nhân', 'Không cần quy luật'], correctAnswer: 0 }
    ],
    flashcards: [
      { id: 1, question: 'Phạm trù là gì?', answer: 'Khái niệm rộng nhất phản ánh thuộc tính và mối liên hệ cơ bản' },
      { id: 2, question: 'Cái riêng là gì?', answer: 'Một sự vật hoặc hiện tượng cụ thể' },
      { id: 3, question: 'Cái chung là gì?', answer: 'Thuộc tính lặp lại ở nhiều sự vật' },
      { id: 4, question: 'Cái đơn nhất là gì?', answer: 'Đặc tính chỉ tồn tại ở một sự vật' },
      { id: 5, question: 'Cái riêng tồn tại với gì?', answer: 'Với cái chung' },
      { id: 6, question: 'Cái nào phong phú hơn?', answer: 'Cái riêng' },
      { id: 7, question: 'Cái nào sâu sắc hơn?', answer: 'Cái chung' },
      { id: 8, question: 'Nguyên nhân là gì?', answer: 'Sự tác động tạo ra biến đổi' },
      { id: 9, question: 'Kết quả là gì?', answer: 'Biến đổi do nguyên nhân tạo nên' },
      { id: 10, question: 'Điều kiện là gì?', answer: 'Yếu tố hỗ trợ nguyên nhân' },
      { id: 11, question: 'Nguyên cớ là gì?', answer: 'Yếu tố không có liên hệ bản chất với kết quả' },
      { id: 12, question: 'Quan hệ nguyên nhân – kết quả mang tính gì?', answer: 'Tất yếu khách quan' },
      { id: 13, question: 'Một nguyên nhân có thể sinh ra gì?', answer: 'Nhiều kết quả' },
      { id: 14, question: 'Muốn giải quyết vấn đề cần làm gì?', answer: 'Tìm nguyên nhân' },
      { id: 15, question: 'Nhận thức phải xuất phát từ đâu?', answer: 'Từ cái riêng' }
    ]
  },
  {
    id: '18',
    title: 'Tất Nhiên & Ngẫu Nhiên, Nội Dung & Hình Thức',
    subtitle: 'Khái niệm, quan hệ biện chứng và ý nghĩa phương pháp luận',
    content: {
      sections: [
        {
          title: 'c. Tất nhiên ngẫu nhiên',
          paragraphs: [
            'TẤT NHIÊN (hay tất yếu) là phạm trù triết học, dùng để chỉ cái mà sự xuất hiện của nó là do nguyên nhân cơ bản, bên trong của kết cấu vật chất (sự vật, hiện tượng, quá trình) quyết định; và trong những điều kiện xác định, nó phải xảy ra theo một cách nhất định chứ không thể khác.',
            'NGẪU NHIÊN là phạm trù triết học, dùng để chỉ cái mà sự xuất hiện của nó là do sự kết hợp tình cờ của các nguyên nhân bên ngoài, hoàn cảnh bên ngoài của kết cấu vật chất quyết định; do đó, trong những điều kiện nhất định, nó có thể xảy ra hoặc không xảy ra, có thể xảy ra  như thế này hoặc như thế khác',
            '– “Cái tất nhiên” là “cái chung”, song không phải mọi “cái chung” đều là “cái tất nhiên”.',
            '– “Cái tất nhiên” và “cái ngẫu nhiên” đều có nguyên nhân.',
            '– “Cái tất nhiên” và “cái ngẫu nhiên” đều bị chi phối bởi quy luật. Quy luật động lực chi phối “cái tất nhiên”. Quy luật xác suất thống kê chi phối “cái ngẫu nhiên”.'
          ]
        },
        {
          title: 'Ý nghĩa phương pháp luận',
          paragraphs: [
            'Muốn tìm ra CÁI TẤT NHIÊN, phải thông qua việc nghiên cứu, so sánh nhiều CÁI NGẪU NHIÊN để tìm cho ra “cái chung” gắn với bản chất của sự vật. Vì chính “cái chung” đó là hình thức thể hiện của “cái tất nhiên” cần tìm',
            'Trong nhận thức cũng như trong thực tiễn, khi muốn hoạch định và thực hiện một công việc nào đó, cần dựa hẳn vào CÁI TẤT NHIÊN, đồng thời phải chú ý đúng mức CÁI NGẪU NHIÊN để đề phòng những trường hợp bất trắc',
            'Nói chung, cần coi trong cả CÁI TẤT NHIÊN lẫn CÁI NGẪU NHIÊN, vì trong những điều kiện nhất định hoặc trong những mối quan hệ nhất định, chúng có thể chuyển hóa cho nhau.'
          ]
        },
        {
          title: 'd. Nội dung và Hình thức',
          paragraphs: [
            '– NỘI DUNG là tổng hợp tất cả các mặt, các yếu tố, các quá trình tạo thành sự vật.',
            '– HÌNH THỨC là phương thức tồn tại của sự vật; là cách thức tổ chức, sắp xếp các yếu tố cấu thành sự vật (phản ánh mối liên hệ tương đối bền vững giữa các yếu tố đó); là cách kết cấu của nội dung (bao gồm cả dáng vẻ bên ngoài của sự vật).',
            'Trong quá trình vận động và phát triển của sự vật, nội dung giữ vai trò quyết định đối với hình thức. Sự tác động trở lại của hình thức đối với nội dung.'
          ]
        },
        {
          title: 'Ý nghĩa phương pháp luận',
          paragraphs: [
            'Vì nội dung và hình thức là thống nhất biện chứng (nương tựa nhau, làm tiền đề của nhau), nên trong nhận thức cũng như trong thực tiễn không được tách rời nội dung và hình thức',
            'Vì sự thống nhất giữa nội dung và hình thức là sự thống nhất biện chứng nên trong thực tiễn, khi thực hiện một nhiệm vụ nào đó (nội dung), cần sử dụng sáng tạo nhiều hình thức có thể có một cách thích hợp.',
            'Trong hoạt động nhận thức và thực tiễn, trước hết phải căn cứ vào nội dung (vì nội dung quyết định hình thức). Song, phải luôn luôn xem giữa nội dung và hình thức có phù hợp với nhau không, vì hình thức có tính độc lập tương đối, có thể thúc đẩy hoặc kìm hãm sự phát triển của sự vật.'
          ]
        }
      ]
    },
    summary: {
      sections: [
        {
          title: 'Tất nhiên và Ngẫu nhiên',
          points: [
            { text: 'Tất nhiên: Điều do nguyên nhân cơ bản bên trong quyết định.' },
            { text: 'Ngẫu nhiên: Điều do nguyên nhân bên ngoài tạo nên.' },
            { text: 'Cái tất nhiên biểu hiện qua vô số cái ngẫu nhiên và chúng có thể chuyển hóa cho nhau.' },
            { text: 'Cần nghiên cứu nhiều cái ngẫu nhiên để tìm cái tất nhiên.' }
          ]
        },
        {
          title: 'Nội dung và Hình thức',
          points: [
            { text: 'Nội dung: Tổng hợp các yếu tố tạo thành sự vật.' },
            { text: 'Hình thức: Phương thức tồn tại của sự vật.' },
            { text: 'Nội dung quyết định hình thức, hình thức tác động trở lại nội dung.' },
            { text: 'Cần chú ý sự phù hợp giữa nội dung và hình thức trong thực tiễn.' }
          ]
        }
      ]
    },
    quiz: [
      { id: 1, question: '“Tất nhiên” là phạm trù dùng để chỉ:', options: ['Điều xảy ra ngẫu hứng', 'Điều có thể xảy ra hoặc không', 'Điều do nguyên nhân cơ bản bên trong quyết định', 'Điều xuất hiện do may mắn'], correctAnswer: 2 },
      { id: 2, question: '“Ngẫu nhiên” là:', options: ['Điều chắc chắn phải xảy ra', 'Điều do nguyên nhân bên ngoài tạo nên', 'Quy luật tất yếu', 'Bản chất của sự vật'], correctAnswer: 1 },
      { id: 3, question: 'Cái tất nhiên và cái ngẫu nhiên:', options: ['Hoàn toàn tách biệt', 'Không liên quan nhau', 'Có thể chuyển hóa cho nhau', 'Luôn đối lập tuyệt đối'], correctAnswer: 2 },
      { id: 4, question: 'Cái tất nhiên tồn tại thông qua:', options: ['Hình thức', 'Nội dung', 'Vô số cái ngẫu nhiên', 'Ý thức con người'], correctAnswer: 2 },
      { id: 5, question: 'Muốn tìm ra cái tất nhiên cần:', options: ['Chỉ quan sát một hiện tượng', 'Nghiên cứu nhiều cái ngẫu nhiên', 'Bỏ qua thực tiễn', 'Chỉ dựa vào suy đoán'], correctAnswer: 1 },
      { id: 6, question: 'Quy luật nào chi phối cái ngẫu nhiên?', options: ['Quy luật động lực', 'Quy luật xác suất thống kê', 'Quy luật đạo đức', 'Quy luật cảm tính'], correctAnswer: 1 },
      { id: 7, question: 'Nội dung là:', options: ['Dáng vẻ bên ngoài', 'Phương thức tồn tại', 'Tổng hợp các yếu tố tạo thành sự vật', 'Hình thức biểu hiện'], correctAnswer: 2 },
      { id: 8, question: 'Hình thức là:', options: ['Bản chất bên trong', 'Cách thức tổ chức và tồn tại của sự vật', 'Nội dung tư tưởng', 'Một yếu tố ngẫu nhiên'], correctAnswer: 1 },
      { id: 9, question: 'Trong mối quan hệ giữa nội dung và hình thức:', options: ['Hình thức quyết định nội dung', 'Nội dung quyết định hình thức', 'Nội dung và hình thức tách biệt', 'Không có sự tác động qua lại'], correctAnswer: 1 },
      { id: 10, question: 'Hình thức có thể:', options: ['Không ảnh hưởng gì', 'Chỉ kìm hãm sự vật', 'Tác động trở lại nội dung', 'Thay thế nội dung'], correctAnswer: 2 },
      { id: 11, question: 'Trong thực tiễn cần:', options: ['Chỉ chú ý nội dung', 'Tách rời nội dung và hình thức', 'Kết hợp phù hợp nội dung và hình thức', 'Chỉ quan tâm hình thức'], correctAnswer: 2 },
      { id: 12, question: 'Cái tất nhiên và cái ngẫu nhiên:', options: ['Đều tồn tại khách quan', 'Chỉ tồn tại trong tư duy', 'Không có nguyên nhân', 'Không bị quy luật chi phối'], correctAnswer: 0 },
      { id: 13, question: 'Nội dung và hình thức có mối quan hệ:', options: ['Biện chứng thống nhất', 'Độc lập tuyệt đối', 'Không liên hệ', 'Ngẫu nhiên'], correctAnswer: 0 },
      { id: 14, question: 'Khi nội dung thay đổi thì:', options: ['Hình thức luôn giữ nguyên', 'Hình thức có thể thay đổi theo', 'Không có tác động gì', 'Nội dung biến mất'], correctAnswer: 1 },
      { id: 15, question: 'Trong nhận thức và thực tiễn cần:', options: ['Coi trọng cả tất nhiên và ngẫu nhiên', 'Chỉ chú ý cái ngẫu nhiên', 'Phủ nhận cái tất nhiên', 'Chỉ nghiên cứu hình thức'], correctAnswer: 0 }
    ],
    flashcards: [
      { id: 1, question: 'Tất nhiên là gì?', answer: 'Điều do nguyên nhân cơ bản bên trong quyết định' },
      { id: 2, question: 'Ngẫu nhiên là gì?', answer: 'Điều do nguyên nhân bên ngoài tạo nên' },
      { id: 3, question: 'Cái tất nhiên có thể biểu hiện qua gì?', answer: 'Qua vô số cái ngẫu nhiên' },
      { id: 4, question: 'Cái tất nhiên và ngẫu nhiên có thể gì?', answer: 'Chuyển hóa cho nhau' },
      { id: 5, question: 'Muốn tìm cái tất nhiên cần làm gì?', answer: 'Nghiên cứu nhiều cái ngẫu nhiên' },
      { id: 6, question: 'Quy luật nào chi phối cái tất nhiên?', answer: 'Quy luật động lực' },
      { id: 7, question: 'Quy luật nào chi phối cái ngẫu nhiên?', answer: 'Quy luật xác suất thống kê' },
      { id: 8, question: 'Nội dung là gì?', answer: 'Tổng hợp các yếu tố tạo thành sự vật' },
      { id: 9, question: 'Hình thức là gì?', answer: 'Phương thức tồn tại của sự vật' },
      { id: 10, question: 'Nội dung quyết định gì?', answer: 'Quyết định hình thức' },
      { id: 11, question: 'Hình thức có vai trò gì?', answer: 'Tác động trở lại nội dung' },
      { id: 12, question: 'Nội dung và hình thức có quan hệ gì?', answer: 'Quan hệ biện chứng thống nhất' },
      { id: 13, question: 'Trong thực tiễn cần chú ý điều gì?', answer: 'Sự phù hợp giữa nội dung và hình thức' },
      { id: 14, question: 'Cái tất nhiên và ngẫu nhiên tồn tại như thế nào?', answer: 'Tồn tại khách quan' },
      { id: 15, question: 'Khi nội dung thay đổi thì sao?', answer: 'Hình thức có thể thay đổi theo' }
    ]
  },
  {
    id: '19',
    title: 'Bản Chất & Hiện Tượng, Khả Năng & Hiện Thực',
    subtitle: 'Khái niệm, quan hệ biện chứng và ý nghĩa phương pháp luận',
    content: {
      sections: [
        {
          title: 'e. Bản chất và Hiện tượng',
          paragraphs: [
            '- BẢN CHẤT là cái tổng hợp tất cả những mặt, những mối liên hệ tất nhiên, tương đối ổn định bên trong sự vật, quy định sự vận động và phát triển của sự vật.',
            '- HIỆN TƯỢNG là cái biểu hiện ra bên ngoài của cái tổng hợp tất cả những mặt, những mối liên hệ ấy (tức của bản chất).',
            'Sự thống nhất giữa bản chất và hiện tượng. Sự khác biệt, đối lập giữa bản chất và hiện tượng.'
          ]
        },
        {
          title: 'Ý nghĩa phương pháp luận',
          paragraphs: [
            'Trong nhận thức, để hiểu đúng đắn, đầy đủ về sự vật, không được dừng lại ở hiện tượng, mà phải đi sâu tìm hiểu bản chất của nó. Trong thực tiễn, cần dựa vào bản chất, chứ không dựa vào hiện tượng.',
            'Vì bản chất của sự vật tồn tại khách quan ở ngay trong bản thân sự vật, nên muốn tìm bản chất của sự vật, phải xuất phát từ chính bản thân sự vật đó, chứ không thể tìm ở ngoài nó.',
            'Vì bản chất bộc lộ ra bằng hiện tượng, nên chỉ có thể tìm bản chất của sự vật thông qua việc nghiên cứu các hiện tượng của nó. Song, hiện tượng của bản chất thì muôn hình ngàn vẻ, nên phải biết phân tích và tổng hợp các hiện tượng, nhất là nắm được hiện tượng điển hình trong hoàn cảnh điển hình.'
          ]
        },
        {
          title: 'f. Khả năng và Hiện thực',
          paragraphs: [
            '– HIỆN THỰC là những gì hiện có, hiện đang tồn tại thực sự.',
            '– KHẢ NĂNG là những gì hiện chưa có, nhưng sẽ có, sẽ tới khi có các điều kiện tương ứng.',
            'LƯU Ý: Hiện thực bao gồm cả hiện thực vật chất (hiện thực khách quan) và hiện thực tinh thần (hiện thực chủ quan), nghĩa là cả vật chất lẫn tinh thần đều tồn tại.',
            'Khả năng và hiện thực tồn tại trong mối quan hệ chặt chẽ với nhau, không tách rời nhau, thường xuyên chuyển hoá lẫn nhau trong quá trình phát triển của sự vật.',
            'Với cùng một sự vật thì trong những điều kiện nhất định, có thể tồn tại đồng thời một số khả năng khác nhau.',
            'Muốn một khả năng biến thành hiện thực, phải có điều kiện nhất định.'
          ]
        },
        {
          title: 'Ý nghĩa phương pháp luận',
          paragraphs: [
            'Trong thực tiễn, cần dựa vào hiện thực, chứ không được dựa vào khả năng (nếu không muốn rơi vào ảo tưởng) để định ra chủ trương, phương hướng hành động của mình.',
            'Tuy không dựa vào khả năng, nhưng cần tính đến các khả năng (khả năng gần, xa, tất nhiên, ngẫu nhiên…) để có các phương án dự phòng thích hợp.',
            'Trong lĩnh vực xã hội, cần đặc biệt chú ý phát huy nguồn lực con người (nhân tố chủ quan). Không thấy nhân tố chủ quan (tức hoạt động của con người), sẽ phạm sai lầm hữu khuynh. Nếu thổi phồng nhân tố chủ quan, bất chấp điều kiện khách quan, sẽ mắc sai lầm “tả khuynh”.'
          ]
        }
      ]
    },
    summary: {
      sections: [
        {
          title: 'Bản chất và Hiện tượng',
          points: [
            { text: 'Bản chất: Tổng hợp các mối liên hệ tất nhiên, ổn định bên trong sự vật.' },
            { text: 'Hiện tượng: Biểu hiện bên ngoài của bản chất.' },
            { text: 'Bản chất và hiện tượng có quan hệ biện chứng thống nhất, bản chất sâu sắc và ổn định hơn.' },
            { text: 'Muốn hiểu sự vật cần đi từ hiện tượng đến bản chất.' }
          ]
        },
        {
          title: 'Khả năng và Hiện thực',
          points: [
            { text: 'Hiện thực: Những gì đang tồn tại thực sự.' },
            { text: 'Khả năng: Điều chưa có nhưng có thể xuất hiện khi có điều kiện.' },
            { text: 'Khả năng và hiện thực chuyển hóa lẫn nhau. Trong thực tiễn cần dựa vào hiện thực nhưng tính đến các khả năng.' },
            { text: 'Tuyệt đối hóa chủ quan dẫn đến sai lầm “tả khuynh”, xem nhẹ dẫn đến sai lầm hữu khuynh.' }
          ]
        }
      ]
    },
    quiz: [
      { id: 1, question: '“Bản chất” là:', options: ['Biểu hiện bên ngoài của sự vật', 'Tổng hợp các mối liên hệ tất nhiên, ổn định bên trong sự vật', 'Một hiện tượng ngẫu nhiên', 'Điều chưa tồn tại'], correctAnswer: 1 },
      { id: 2, question: '“Hiện tượng” là:', options: ['Cái quy định sự phát triển của sự vật', 'Tổng hợp các yếu tố bên trong', 'Biểu hiện ra bên ngoài của bản chất', 'Một khả năng chưa xảy ra'], correctAnswer: 2 },
      { id: 3, question: 'Bản chất và hiện tượng:', options: ['Hoàn toàn tách rời nhau', 'Có mối quan hệ thống nhất biện chứng', 'Không liên hệ', 'Luôn giống hệt nhau'], correctAnswer: 1 },
      { id: 4, question: 'Bản chất thường:', options: ['Dễ nhận biết ngay lập tức', 'Ổn định và sâu sắc hơn hiện tượng', 'Chỉ tồn tại bên ngoài', 'Không thay đổi'], correctAnswer: 1 },
      { id: 5, question: 'Muốn nhận thức đúng sự vật cần:', options: ['Chỉ nhìn hiện tượng bên ngoài', 'Đi sâu tìm bản chất', 'Bỏ qua hiện tượng', 'Chỉ dựa vào cảm tính'], correctAnswer: 1 },
      { id: 6, question: '“Hiện thực” là:', options: ['Điều chưa tồn tại', 'Điều có thể xảy ra', 'Những gì hiện đang tồn tại thực sự', 'Ý tưởng tưởng tượng'], correctAnswer: 2 },
      { id: 7, question: '“Khả năng” là:', options: ['Điều chắc chắn đang tồn tại', 'Điều chưa có nhưng có thể trở thành hiện thực', 'Một hiện tượng ngẫu nhiên', 'Một bản chất cố định'], correctAnswer: 1 },
      { id: 8, question: 'Muốn khả năng trở thành hiện thực cần:', options: ['Chỉ có ý muốn chủ quan', 'Có điều kiện nhất định', 'Không cần tác động', 'Chỉ cần thời gian'], correctAnswer: 1 },
      { id: 9, question: 'Trong cùng một sự vật:', options: ['Chỉ tồn tại một khả năng', 'Không tồn tại khả năng nào', 'Có thể tồn tại nhiều khả năng khác nhau', 'Chỉ có hiện thực'], correctAnswer: 2 },
      { id: 10, question: 'Khả năng và hiện thực:', options: ['Tách rời nhau', 'Không chuyển hóa cho nhau', 'Có quan hệ chặt chẽ và chuyển hóa lẫn nhau', 'Luôn đối lập tuyệt đối'], correctAnswer: 2 },
      { id: 11, question: 'Trong hoạt động thực tiễn cần:', options: ['Dựa vào khả năng để hành động', 'Dựa vào hiện thực để đề ra phương hướng', 'Bỏ qua điều kiện khách quan', 'Chỉ chú ý mong muốn cá nhân'], correctAnswer: 1 },
      { id: 12, question: 'Nếu tuyệt đối hóa nhân tố chủ quan sẽ dễ mắc:', options: ['Sai lầm “tả khuynh”', 'Sai lầm hữu khuynh', 'Sai lầm ngẫu nhiên', 'Sai lầm bản chất'], correctAnswer: 0 },
      { id: 13, question: 'Không coi trọng nhân tố chủ quan dễ dẫn đến:', options: ['Chủ quan duy ý chí', 'Sai lầm hữu khuynh', 'Duy tâm', 'Phiến diện hình thức'], correctAnswer: 1 },
      { id: 14, question: 'Hiện tượng có vai trò:', options: ['Che giấu hoàn toàn bản chất', 'Không liên quan đến bản chất', 'Biểu hiện bản chất ra bên ngoài', 'Thay thế bản chất'], correctAnswer: 2 },
      { id: 15, question: 'Trong nhận thức cần:', options: ['Dừng ở hiện tượng', 'Đi từ hiện tượng đến bản chất', 'Chỉ nghiên cứu khả năng', 'Phủ nhận hiện thực'], correctAnswer: 1 }
    ],
    flashcards: [
      { id: 1, question: 'Bản chất là gì?', answer: 'Tổng hợp các mối liên hệ tất nhiên, ổn định bên trong sự vật' },
      { id: 2, question: 'Hiện tượng là gì?', answer: 'Biểu hiện bên ngoài của bản chất' },
      { id: 3, question: 'Bản chất và hiện tượng có quan hệ gì?', answer: 'Quan hệ biện chứng thống nhất' },
      { id: 4, question: 'Bản chất thường như thế nào?', answer: 'Sâu sắc và ổn định hơn hiện tượng' },
      { id: 5, question: 'Muốn hiểu sự vật cần làm gì?', answer: 'Đi từ hiện tượng đến bản chất' },
      { id: 6, question: 'Hiện thực là gì?', answer: 'Những gì đang tồn tại thực sự' },
      { id: 7, question: 'Khả năng là gì?', answer: 'Điều chưa có nhưng có thể xuất hiện' },
      { id: 8, question: 'Muốn khả năng thành hiện thực cần gì?', answer: 'Điều kiện nhất định' },
      { id: 9, question: 'Khả năng và hiện thực có quan hệ gì?', answer: 'Chuyển hóa lẫn nhau' },
      { id: 10, question: 'Một sự vật có thể có gì?', answer: 'Nhiều khả năng khác nhau' },
      { id: 11, question: 'Trong thực tiễn cần dựa vào đâu?', answer: 'Dựa vào hiện thực' },
      { id: 12, question: 'Có cần tính đến khả năng không?', answer: 'Có' },
      { id: 13, question: 'Tuyệt đối hóa chủ quan dẫn đến gì?', answer: 'Sai lầm “tả khuynh”' },
      { id: 14, question: 'Xem nhẹ nhân tố chủ quan dẫn đến gì?', answer: 'Sai lầm hữu khuynh' },
      { id: 15, question: 'Hiện tượng phản ánh điều gì?', answer: 'Phản ánh bản chất' }
    ]
  },
  {
    id: '20',
    title: 'Quy Luật Lượng - Chất',
    subtitle: 'Cách thức vận động và phát triển của sự vật hiện tượng',
    content: {
      sections: [
        {
          title: 'Khái niệm về QUY LUẬT',
          paragraphs: [
            'QUY LUẬT là một phạm trù dùng để chỉ MỐI LIÊN HỆ khách quan, bản chất, tất yếu, lặp đi lặp lại giữa các mặt, các yếu tố, các thuộc tính bên trong một sự vật nào đó, hay giữa các sự vật, hiện tượng với nhau.',
            'Phân loại quy luật theo lĩnh vực tác động: Quy luật tự nhiên, Quy luật xã hội, Quy luật tư duy.',
            'Phân loại quy luật theo mức độ phổ biến: Quy luật riêng, Quy luật chung, Quy luật chung nhất hay quy luật phổ biến (là những quy luật của phép biện chứng duy vật).'
          ]
        },
        {
          title: 'a. Quy luật “LƯỢNG – CHẤT”',
          paragraphs: [
            '* Vị trí của quy luật: chỉ ra cách thức vận động và phát triển của sự vật hiện tượng.',
            'Chất là phạm trù triết học dùng để chỉ những thuộc tính khách quan vốn có của sự vật, hiện tượng, là sự thống nhất hữu cơ của những thuộc tính làm cho sự vật, hiện tượng là nó chứ không phải là cái khác.',
            'Lượng là phạm trù triết học dùng để chỉ tính quy định khách quan vốn có của sự vật về mặt số lượng, quy mô, trình độ, nhịp độ… của các quá trình vận động và phát triển của sự vật, hiện tượng.'
          ]
        },
        {
          title: 'Quan hệ biện chứng giữa chất và lượng',
          paragraphs: [
            'Sự vật, hiện tượng luôn có sự thống nhất giữa chất và lượng, chúng gắn bó hữu cơ với nhau, quy định lẫn nhau.',
            'Lượng là yếu tố động => luôn thay đổi (tăng hoặc giảm). Biến đổi về lượng có xu hướng tích lũy, thay đổi về lượng trong một khoảng giới hạn nhất định mới dẫn tới sự thay đổi về chất.',
            'Độ: là khoảng giới hạn mà trong đó, sự thay đổi về lượng chưa làm thay đổi căn bản về chất của sự vật.',
            'ĐIỂM NÚT: là thời điểm mà tại đó, sự thay đổi về lượng đủ để làm thay đổi về chất của sự vật.',
            'BƯỚC NHẢY: là sự chuyển hoá về chất của sự vật. Sự chuyển hoá được thực hiện là do sự thay đổi về lượng trước đó của sự vật gây ra.',
            'Chất đổi cũng làm cho lượng đổi. Chất là yếu tố ổn định, khi lượng đổi trong phạm vi độ, chất chưa có biến đổi căn bản. Biến đổi về chất diễn ra nhanh chóng, đột ngột, căn bản, toàn diện => chất cũ mất đi, chuyển hóa thành chất mới.'
          ]
        },
        {
          title: 'Ý nghĩa phương pháp luận',
          paragraphs: [
            'Trong nhận thức và thực tiễn phải biết tích luỹ về lượng để có biến đổi về chất; không được nôn nóng cũng như không được bảo thủ.',
            'Khi lượng đã đạt đến điểm nút thì thực hiện bước nhảy là yêu cầu khách quan, tránh chủ quan nóng vội đốt cháy giai đoạn hoặc bảo thủ, thụ động.',
            'Phải có thái độ khách quan, khoa học và quyết tâm thực hiện bước nhảy.'
          ]
        }
      ]
    },
    summary: {
      sections: [
        {
          title: 'Quy luật lượng – chất',
          points: [
            { text: 'Chỉ ra cách thức vận động và phát triển của sự vật hiện tượng.' },
            { text: 'Chất: Thuộc tính khách quan làm sự vật là nó. Lượng: Tính quy định về số lượng, quy mô, trình độ.' },
            { text: 'Độ: Khoảng giới hạn lượng đổi chưa làm chất đổi. Điểm nút: Thời điểm lượng đổi làm chất đổi.' },
            { text: 'Bước nhảy: Sự chuyển hóa về chất.' }
          ]
        }
      ]
    },
    quiz: [
      { id: 1, question: 'Quy luật lượng – chất nói lên:', options: ['Nguồn gốc của sự phát triển', 'Khuynh hướng phát triển', 'Cách thức vận động và phát triển của sự vật', 'Bản chất của hiện tượng'], correctAnswer: 2 },
      { id: 2, question: '“Chất” là:', options: ['Số lượng của sự vật', 'Thuộc tính khách quan làm sự vật là nó', 'Mức độ vận động', 'Kích thước của sự vật'], correctAnswer: 1 },
      { id: 3, question: '“Lượng” là:', options: ['Bản chất bên trong', 'Thuộc tính không thay đổi', 'Tính quy định về số lượng, quy mô, trình độ', 'Hình thức tồn tại'], correctAnswer: 2 },
      { id: 4, question: 'Trong sự vật, chất và lượng:', options: ['Tồn tại tách biệt', 'Không liên quan nhau', 'Thống nhất và tác động qua lại', 'Luôn đối lập tuyệt đối'], correctAnswer: 2 },
      { id: 5, question: '“Độ” là:', options: ['Thời điểm chất thay đổi', 'Khoảng giới hạn mà lượng thay đổi chưa làm chất đổi', 'Sự thay đổi đột biến', 'Một loại bước nhảy'], correctAnswer: 1 },
      { id: 6, question: '“Điểm nút” là:', options: ['Nơi lượng không thay đổi', 'Giới hạn làm chất biến đổi', 'Một hiện tượng ngẫu nhiên', 'Giai đoạn ổn định tuyệt đối'], correctAnswer: 1 },
      { id: 7, question: '“Bước nhảy” là:', options: ['Sự thay đổi về lượng', 'Sự chuyển hóa về chất của sự vật', 'Một hiện tượng ngẫu nhiên', 'Sự tích lũy đơn thuần'], correctAnswer: 1 },
      { id: 8, question: 'Khi lượng biến đổi đến điểm nút sẽ:', options: ['Không có gì thay đổi', 'Chất thay đổi', 'Sự vật biến mất hoàn toàn', 'Chỉ hình thức thay đổi'], correctAnswer: 1 },
      { id: 9, question: 'Lượng thường có đặc điểm:', options: ['Ổn định tuyệt đối', 'Không thay đổi', 'Luôn vận động và biến đổi', 'Không liên quan đến chất'], correctAnswer: 2 },
      { id: 10, question: 'Chất mới sau bước nhảy sẽ:', options: ['Không có lượng mới', 'Sinh ra lượng mới phù hợp', 'Giữ nguyên trạng thái cũ', 'Không tiếp tục phát triển'], correctAnswer: 1 },
      { id: 11, question: 'Bước nhảy có thể:', options: ['Chỉ là tiến bộ', 'Chỉ là thoái bộ', 'Tiến bộ hoặc thoái bộ', 'Không ảnh hưởng phát triển'], correctAnswer: 2 },
      { id: 12, question: 'Trong nhận thức và thực tiễn cần:', options: ['Nóng vội đốt cháy giai đoạn', 'Bảo thủ, thụ động', 'Tích lũy lượng để tạo biến đổi chất', 'Phủ nhận bước nhảy'], correctAnswer: 2 },
      { id: 13, question: 'Quy luật lượng – chất cho thấy:', options: ['Sự phát triển diễn ra ngẫu nhiên', 'Sự phát triển có tính tích lũy và chuyển hóa', 'Chất không thay đổi', 'Lượng quyết định tất cả'], correctAnswer: 1 },
      { id: 14, question: 'Hình thức bước nhảy gồm:', options: ['Đột biến và dần dần', 'Tất nhiên và ngẫu nhiên', 'Nội dung và hình thức', 'Bản chất và hiện tượng'], correctAnswer: 0 },
      { id: 15, question: 'Khi lượng chưa đạt điểm nút thì:', options: ['Chất thay đổi căn bản', 'Sự vật mất đi', 'Chất cơ bản chưa thay đổi', 'Xuất hiện bước nhảy ngay'], correctAnswer: 2 }
    ],
    flashcards: [
      { id: 1, question: 'Quy luật lượng – chất nói lên điều gì?', answer: 'Cách thức vận động và phát triển của sự vật' },
      { id: 2, question: 'Chất là gì?', answer: 'Thuộc tính khách quan làm sự vật là nó' },
      { id: 3, question: 'Lượng là gì?', answer: 'Tính quy định về số lượng, quy mô, trình độ' },
      { id: 4, question: 'Chất và lượng có quan hệ gì?', answer: 'Thống nhất biện chứng' },
      { id: 5, question: 'Độ là gì?', answer: 'Khoảng giới hạn lượng đổi chưa làm chất đổi' },
      { id: 6, question: 'Điểm nút là gì?', answer: 'Thời điểm lượng đổi làm chất đổi' },
      { id: 7, question: 'Bước nhảy là gì?', answer: 'Sự chuyển hóa về chất' },
      { id: 8, question: 'Lượng thường có đặc điểm gì?', answer: 'Luôn biến đổi' },
      { id: 9, question: 'Chất thường có đặc điểm gì?', answer: 'Tương đối ổn định' },
      { id: 10, question: 'Khi lượng đạt điểm nút sẽ xảy ra gì?', answer: 'Chất thay đổi' },
      { id: 11, question: 'Chất mới tạo ra điều gì?', answer: 'Lượng mới' },
      { id: 12, question: 'Bước nhảy có thể như thế nào?', answer: 'Đột biến hoặc dần dần' },
      { id: 13, question: 'Trong thực tiễn cần làm gì?', answer: 'Tích lũy lượng để đổi chất' },
      { id: 14, question: 'Cần tránh điều gì?', answer: 'Nóng vội hoặc bảo thủ' },
      { id: 15, question: 'Quy luật lượng – chất phản ánh điều gì?', answer: 'Sự tích lũy và chuyển hóa trong phát triển' }
    ]
  },
  {
    id: '21',
    title: 'Quy Luật Mâu Thuẫn & Phủ Định Của Phủ Định',
    subtitle: 'Nguồn gốc, động lực và khuynh hướng phát triển',
    content: {
      sections: [
        {
          title: 'b. Quy luật “MÂU THUẪN” (Quy luật thống nhất và đấu tranh của các mặt đối lập)',
          paragraphs: [
            '* Quy luật này có vị trí là hạt nhân của phép biện chứng, chỉ ra nguồn gốc và động lực của sự vận động và phát triển.',
            '“Mặt đối lập” là phạm trù triết học dùng để chỉ những mặt, những thuộc tính, những tính quy định có khuynh hướng biến đổi trái ngược nhau, tồn tại một cách khách quan, phổ biến ở mọi sự vật.',
            '“Sự thống nhất” của các mặt đối lập là sự nương tựa vào nhau, đòi hỏi phải có nhau của các mặt đối lập; sự giống nhau (“đồng nhất”) ở một số nhân tố; sự tác động ngang nhau của các mặt đối lập.',
            '“Sự đấu tranh” của các mặt đối lập là sự tác động qua lại theo xu hướng bài trừ nhau, phủ định nhau của các mặt đối lập.',
            'Các mặt đối lập cùng tồn tại, vừa thống nhất vừa đấu tranh với nhau thì tạo thành một “mâu thuẫn biện chứng”.',
            'Sự thống nhất và đấu tranh giữa các mặt đối lập này là nguyên nhân, động lực bên trong của sự vận động và phát triển, làm cho cái cũ mất đi và cái mới ra đời.'
          ]
        },
        {
          title: 'Ý nghĩa phương pháp luận',
          paragraphs: [
            'Mâu thuẫn trong sự vật, hiện tượng mang tính khách quan, phổ biến nên phải tôn trọng mâu thuẫn…',
            'Phân tích cụ thể từng loại mâu thuẫn để tìm ra cách giải quyết phù hợp, tránh rập khuôn, máy móc…',
            'Nắm vững nguyên tắc giải quyết mâu thuẫn bằng đấu tranh giữa các mặt đối lập, không điều hòa mâu thuẫn cũng không nóng vội hay bảo thủ.'
          ]
        },
        {
          title: 'c. Quy luật “PHỦ ĐỊNH CỦA PHỦ ĐỊNH”',
          paragraphs: [
            '* Vị trí của quy luật trong phép biện chứng: Chỉ ra khuynh hướng phát triển của sự vật, hiện tượng: tiến lên, nhưng theo chu kỳ.',
            'Khái niệm Phủ định biện chứng: Là sự tự phủ định để phát triển, mang tính khách quan và kế thừa.',
            'Đặc điểm của phủ định biện chứng: Tính khách quan và tính kế thừa.',
            'Đường xoáy ốc thể hiện sự phát triển quanh co nhưng đi lên. Tính kế thừa của phủ định biện chứng là chọn lọc và cải tạo yếu tố tích cực của cái cũ.'
          ]
        }
      ]
    },
    summary: {
      sections: [
        {
          title: 'Quy luật Mâu thuẫn',
          points: [
            { text: 'Là hạt nhân của phép biện chứng, chỉ ra nguồn gốc và động lực phát triển.' },
            { text: 'Mặt đối lập: Những mặt có khuynh hướng trái ngược nhau.' },
            { text: 'Thống nhất: Sự nương tựa, làm tiền đề cho nhau. Đấu tranh: Sự bài trừ, phủ định lẫn nhau.' }
          ]
        },
        {
          title: 'Quy luật Phủ định của Phủ định',
          points: [
            { text: 'Chỉ ra khuynh hướng phát triển đi lên theo đường xoáy ốc.' },
            { text: 'Phủ định biện chứng: Sự tự phủ định, mang tính khách quan và kế thừa chọn lọc.' }
          ]
        }
      ]
    },
    quiz: [
      { id: 1, question: 'Quy luật mâu thuẫn còn được gọi là:', options: ['Quy luật lượng – chất', 'Quy luật thống nhất và đấu tranh của các mặt đối lập', 'Quy luật phủ định sạch trơn', 'Quy luật hiện thực'], correctAnswer: 1 },
      { id: 2, question: 'Quy luật mâu thuẫn giữ vị trí:', options: ['Quy luật riêng', 'Hình thức phát triển', 'Hạt nhân của phép biện chứng', 'Một phạm trù logic'], correctAnswer: 2 },
      { id: 3, question: '“Mặt đối lập” là:', options: ['Các yếu tố giống nhau hoàn toàn', 'Những thuộc tính có khuynh hướng biến đổi trái ngược nhau', 'Các hiện tượng ngẫu nhiên', 'Những yếu tố bên ngoài sự vật'], correctAnswer: 1 },
      { id: 4, question: '“Sự thống nhất” của các mặt đối lập thể hiện:', options: ['Các mặt đối lập không liên hệ nhau', 'Các mặt đối lập nương tựa và làm tiền đề cho nhau', 'Các mặt đối lập triệt tiêu nhau hoàn toàn', 'Các mặt đối lập đứng yên'], correctAnswer: 1 },
      { id: 5, question: '“Sự đấu tranh” của các mặt đối lập là:', options: ['Sự giống nhau giữa các mặt đối lập', 'Sự bài trừ, phủ định lẫn nhau', 'Trạng thái cân bằng tuyệt đối', 'Sự tồn tại độc lập'], correctAnswer: 1 },
      { id: 6, question: 'Mâu thuẫn biện chứng:', options: ['Chỉ tồn tại trong tư duy', 'Mang tính khách quan và phổ biến', 'Không có trong tự nhiên', 'Chỉ là mâu thuẫn ngôn ngữ'], correctAnswer: 1 },
      { id: 7, question: 'Nguồn gốc và động lực của sự phát triển là:', options: ['Hiện tượng', 'Khả năng', 'Mâu thuẫn giữa các mặt đối lập', 'Hình thức bên ngoài'], correctAnswer: 2 },
      { id: 8, question: 'Mâu thuẫn chủ yếu là:', options: ['Mâu thuẫn không quan trọng', 'Mâu thuẫn giữ vai trò quyết định trong một giai đoạn', 'Mâu thuẫn bên ngoài', 'Mâu thuẫn ngẫu nhiên'], correctAnswer: 1 },
      { id: 9, question: '“Phủ định biện chứng” là:', options: ['Phủ nhận sạch trơn cái cũ', 'Sự tự phủ định để phát triển', 'Xóa bỏ hoàn toàn quá khứ', 'Hiện tượng ngẫu nhiên'], correctAnswer: 1 },
      { id: 10, question: 'Đặc điểm của phủ định biện chứng là:', options: ['Chủ quan và tùy ý', 'Không có tính kế thừa', 'Có tính khách quan và kế thừa', 'Chỉ diễn ra trong tự nhiên'], correctAnswer: 2 },
      { id: 11, question: 'Quy luật phủ định của phủ định chỉ ra:', options: ['Nguồn gốc phát triển', 'Cách thức vận động', 'Khuynh hướng phát triển đi lên theo đường xoáy ốc', 'Sự đứng yên của sự vật'], correctAnswer: 2 },
      { id: 12, question: '“Đường xoáy ốc” thể hiện:', options: ['Sự lặp lại nguyên vẹn cái cũ', 'Sự phát triển quanh co nhưng đi lên', 'Sự phát triển ngẫu nhiên', 'Sự thụt lùi tuyệt đối'], correctAnswer: 1 },
      { id: 13, question: 'Tính kế thừa của phủ định biện chứng là:', options: ['Giữ nguyên mọi yếu tố cũ', 'Loại bỏ hoàn toàn cái cũ', 'Chọn lọc và cải tạo yếu tố tích cực của cái cũ', 'Phủ nhận quá khứ'], correctAnswer: 2 },
      { id: 14, question: 'Trong thực tiễn cần:', options: ['Phủ định sạch trơn quá khứ', 'Bảo thủ giữ nguyên cái cũ', 'Ủng hộ cái mới tiến bộ', 'Phủ nhận sự phát triển'], correctAnswer: 2 },
      { id: 15, question: 'Quy luật phủ định của phủ định giúp con người:', options: ['Bi quan trước khó khăn', 'Có thái độ lạc quan cách mạng', 'Phủ nhận hiện thực', 'Không cần đổi mới'], correctAnswer: 1 }
    ],
    flashcards: [
      { id: 1, question: 'Quy luật mâu thuẫn còn gọi là gì?', answer: 'Quy luật thống nhất và đấu tranh của các mặt đối lập' },
      { id: 2, question: 'Quy luật mâu thuẫn giữ vị trí gì?', answer: 'Hạt nhân của phép biện chứng' },
      { id: 3, question: 'Mặt đối lập là gì?', answer: 'Những mặt có khuynh hướng trái ngược nhau' },
      { id: 4, question: 'Sự thống nhất của các mặt đối lập là gì?', answer: 'Sự nương tựa và làm tiền đề cho nhau' },
      { id: 5, question: 'Sự đấu tranh của các mặt đối lập là gì?', answer: 'Sự bài trừ, phủ định lẫn nhau' },
      { id: 6, question: 'Mâu thuẫn biện chứng có tính gì?', answer: 'Khách quan và phổ biến' },
      { id: 7, question: 'Động lực của sự phát triển là gì?', answer: 'Mâu thuẫn giữa các mặt đối lập' },
      { id: 8, question: 'Mâu thuẫn chủ yếu là gì?', answer: 'Mâu thuẫn giữ vai trò quyết định' },
      { id: 9, question: 'Phủ định biện chứng là gì?', answer: 'Sự tự phủ định để phát triển' },
      { id: 10, question: 'Phủ định biện chứng có đặc điểm gì?', answer: 'Tính khách quan và kế thừa' },
      { id: 11, question: 'Quy luật phủ định của phủ định chỉ ra điều gì?', answer: 'Khuynh hướng phát triển đi lên' },
      { id: 12, question: 'Sự phát triển diễn ra theo hình gì?', answer: 'Đường xoáy ốc' },
      { id: 13, question: 'Tính kế thừa thể hiện ở đâu?', answer: 'Chọn lọc yếu tố tích cực của cái cũ' },
      { id: 14, question: 'Trong thực tiễn cần làm gì?', answer: 'Ủng hộ cái mới tiến bộ' },
      { id: 15, question: 'Quy luật phủ định của phủ định giúp hình thành thái độ gì?', answer: 'Lạc quan cách mạng' }
    ]
  }

];
